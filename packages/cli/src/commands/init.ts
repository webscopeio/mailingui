import chalk from "chalk";
import { Command } from "commander";
import path from "path";
import prompts from "prompts";
import fs from "fs";
import { getTheme } from "../utils/get-theme";

export const init = new Command()
  .name("init")
  .description("Configure your MailingUI components")
  .option(
    "-p, --path <path>",
    "define base path to your MailingUI components",
    "./src/@mailingui"
  )
  .action(async (args) => {
    if (fs.existsSync("./settings.json")) {
      const response = await prompts({
        type: "confirm",
        name: "confirmation",
        message: `${chalk.yellow(
          "Settings.json"
        )} already exist, do you want to overwrite the configuration?`,
      });
      if (!response.confirmation) {
        process.exit(0);
      }
    }

    const settings = {
      basePath: args.path,
    };
    fs.writeFileSync("settings.json", JSON.stringify(settings));

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
