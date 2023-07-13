import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import { createFile } from "../utils/createFile";
import { getAvailableComponents } from "../utils/getComponents";
import { SETTINGS_FILE_NAME } from "../constants";

export const add = new Command()
  .name("add")
  .description("add components and templates to your project")
  .argument("components...", "name of the item")
  .option(
    "-o, --overwrite",
    "automatically overwrite existing components",
    false
  )
  .action(async (components: string[], options) => {
    if (!fs.existsSync(SETTINGS_FILE_NAME)) {
      console.error(
        `Missing ${chalk.yellow(
          SETTINGS_FILE_NAME
        )} file, please run ${chalk.green(
          "init"
        )} to create a configuration file.`
      );
      process.exit(1);
    }

    const config = fs.readFileSync(SETTINGS_FILE_NAME, "utf8");
    const { basePath } = JSON.parse(config);

    const { components: availableComponents } = await getAvailableComponents();
    for (const component of components) {
      if (!availableComponents[component]) {
        console.error(chalk.red("Not a valid choice."));
      } else {
        await createFile(
          component,
          availableComponents,
          `${basePath}`,
          options.overwrite
        );
      }
    }
  });
