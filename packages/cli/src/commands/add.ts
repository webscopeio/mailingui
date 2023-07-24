import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import { createFile } from "../utils/createFile";
import { getAvailableComponents } from "../utils/getComponents";
import { SETTINGS_FILE_NAME } from "../constants";

export const add = new Command()
  .name("add")
  .description("add components and templates to your project")
  .argument("[components...]", "name of the components to add")
  .option(
    "-o, --overwrite",
    "automatically overwrite existing components",
    false
  )
  .option("-a, --all", "download all available components", false)
  .action(async (components, options) => {
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

    if (!components.length) {
      if (!options.all) {
        console.error(
          `No components selected. Please select at least one component or use ${chalk.yellow(
            "--all"
          )} to download all components.`
        );
        process.exit(1);
      }
    }

    const config = fs.readFileSync(SETTINGS_FILE_NAME, "utf8");
    const { basePath } = JSON.parse(config);

    const { components: availableComponents } = await getAvailableComponents();
    const componentsToDownload = options.all
      ? Object.keys(availableComponents)
      : components;

    for (const component of componentsToDownload) {
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
