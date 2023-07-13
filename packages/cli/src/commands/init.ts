import chalk from "chalk";
import { Command } from "commander";
import execa from "execa";
import fs from "fs";
import ora from "ora";
import path from "path";
import prompts from "prompts";
import {
  DEPENDENCIES as REQUIRED_DEPENDENCIES,
  SETTINGS_FILE_NAME,
} from "../constants";
import { getPackageManager } from "../utils/getPackageManager";
import { getTheme } from "../utils/getTheme";

export const init = new Command()
  .name("init")
  .description("Configure your MailingUI components")
  .option(
    "-p, --path <path>",
    "define base path to your MailingUI components",
    "./src/@mailingui"
  )
  .option("-o, --overwrite", "overwrite existing configuration", false)
  .action(async (options) => {
    const packageFile = fs.readFileSync("package.json", "utf8");
    const { dependencies: installedDependecies } = JSON.parse(packageFile);
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

    const settings = {
      basePath: options.path,
    };
    fs.writeFileSync(SETTINGS_FILE_NAME, JSON.stringify(settings));

    const componentsPath = `${options.path}/components`;
    if (!fs.existsSync(path.resolve(componentsPath))) {
      fs.mkdirSync(path.resolve(componentsPath), { recursive: true });
    }

    const { theme } = await getTheme();
    const themePath = `${options.path}/themes`;
    if (!fs.existsSync(path.resolve(themePath))) {
      fs.mkdirSync(path.resolve(themePath), { recursive: true });
    }
    fs.writeFileSync(`${themePath}/index.ts`, theme);

    console.log(`\n${chalk.green("Project initializated successfully!")}`);
  });
