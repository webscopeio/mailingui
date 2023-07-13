import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import { createFile } from "../utils/createFile";
import { getAvailableComponents } from "../utils/get-components";

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
    if (!fs.existsSync("./settings.json")) {
      console.error(
        `Missing ${chalk.yellow(
          "settings.json"
        )} file, please run ${chalk.green(
          "init"
        )} to create a configuration file.`
      );
      process.exit(1);
    }

    const config = fs.readFileSync("./settings.json", "utf8");
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
