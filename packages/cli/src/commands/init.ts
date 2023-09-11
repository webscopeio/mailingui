import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import execa from "execa";
import ora from "ora";
import prompts from "prompts";
import {
  DEPENDENCIES as REQUIRED_DEPENDENCIES,
  SETTINGS_FILE_NAME,
} from "../constants";
import { getPackageManager } from "../utils/getPackageManager";
import { getTheme } from "../utils/getTheme";
import { getUtils } from "../utils/getUtils";

export const init = new Command()
  .name("init")
  .description("Configure your MailingUI components")
  .option(
    "-p, --path <path>",
    "define base path to your MailingUI components",
    "./src/mailingui"
  )
  .option("-o, --overwrite", "overwrite existing configuration", false)
  .action(async (options) => {
    const packageFile = fs.readFileSync("package.json", "utf8");
    const packageObj = JSON.parse(packageFile);

    // don't throw if dependencies are not in package.json
    if (!("depencies" in packageObj)) {
      packageObj.dependencies = {};
    }
    const { dependencies: installedDependecies } = packageObj;

    for (const dependency of REQUIRED_DEPENDENCIES) {
      if (!installedDependecies[dependency]) {
        const response = await prompts({
          type: "confirm",
          name: "confirmation",
          message:
            "Some of the required dependencies are missing. Do you want to install them?",
        });
        if (!response.confirmation) {
          break;
        }

        const spinner = ora("Installing dependencies...").start();
        const packageManager = await getPackageManager();
        await execa(packageManager, [
          packageManager === "npm" ? "install" : "add",
          ...REQUIRED_DEPENDENCIES,
          "-E",
        ]);
        spinner.succeed("Dependencies installed!");
        break;
      }
    }

    if (fs.existsSync(SETTINGS_FILE_NAME) && !options.overwrite) {
      const response = await prompts({
        type: "confirm",
        name: "confirmation",
        message: `${chalk.yellow(
          SETTINGS_FILE_NAME
        )} already exist, do you want to overwrite the configuration?`,
      });
      if (!response.confirmation) {
        process.exit(0);
      }
    }

    const componentsPath = `${options.path}/components`;
    if (!fs.existsSync(path.resolve(componentsPath))) {
      fs.mkdirSync(path.resolve(componentsPath), { recursive: true });
    }

    fs.writeFileSync(`${options.path}/components/index.ts`, "");

    const { index, theme, types } = await getTheme();
    const themePath = `${options.path}/themes`;
    if (!fs.existsSync(path.resolve(themePath))) {
      fs.mkdirSync(path.resolve(themePath), { recursive: true });
    }
    fs.writeFileSync(`${themePath}/index.ts`, index);
    fs.writeFileSync(`${themePath}/theme.ts`, theme);
    fs.writeFileSync(`${themePath}/types.ts`, types);

    const { index: utilsIndex, utils } = await getUtils();
    const utilsPath = `${options.path}/utils`;
    if (!fs.existsSync(path.resolve(utilsPath))) {
      fs.mkdirSync(path.resolve(utilsPath), { recursive: true });
    }
    fs.writeFileSync(`${utilsPath}/index.ts`, utilsIndex);
    const pathToThemes = path.relative(
      `${options.path}/utils`,
      `${options.path}/themes`
    );
    const utilsFile = utils.replace("@mailingui/themes", pathToThemes);
    fs.writeFileSync(`${utilsPath}/utils.ts`, utilsFile);

    const settings = {
      basePath: options.path,
    };
    fs.writeFileSync(SETTINGS_FILE_NAME, JSON.stringify(settings));

    console.log(`\n${chalk.green("Project initializated successfully!")}`);
  });
