import chalk from "chalk";
import { Command } from "commander";
import path from "path";
import prompts from "prompts";
import fs from "fs";
import { getTheme } from "../utils/get-theme";
import { SETTINGS_FILE_NAME } from "../constants";

export const init = new Command()
  .name("init")
  .description("Configure your MailingUI components")
  .option(
    "-p, --path <path>",
    "define base path to your MailingUI components",
    "./src/@mailingui"
  )
  .action(async (args) => {
    if (fs.existsSync(SETTINGS_FILE_NAME)) {
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
      basePath: args.path,
    };
    fs.writeFileSync(SETTINGS_FILE_NAME, JSON.stringify(settings));

    const componentsPath = `${args.path}/components`;
    if (!fs.existsSync(path.resolve(componentsPath))) {
      fs.mkdirSync(path.resolve(componentsPath), { recursive: true });
    }

    const { theme } = await getTheme();
    const themePath = `${args.path}/themes`;
    if (!fs.existsSync(path.resolve(themePath))) {
      fs.mkdirSync(path.resolve(themePath), { recursive: true });
    }
    fs.writeFileSync(`${themePath}/index.ts`, theme);

    console.log(`${chalk.green("Project initializated successfully!")}`);
  });
