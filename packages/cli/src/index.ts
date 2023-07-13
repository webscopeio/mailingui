import { Command } from "commander"; // add this line
import { existsSync } from "fs";
import path from "path";
import fs from "fs";
import prompts from "prompts";
import { getAvailableComponents } from "./utils/get-components";
import { Component } from "./types";
import chalk from "chalk";
import { getTheme } from "./utils/get-theme";

const program = new Command();

program
  .action(() => {
    // default action is to show help
    program.help();
  })
  .version("1.0.0")
  .description("");

program
  .command("init")
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
    if (!existsSync(path.resolve(componentsPath))) {
      fs.mkdirSync(path.resolve(componentsPath), { recursive: true });
    }

    const { theme } = await getTheme();
    const themePath = `${args.path}/themes`;
    if (!existsSync(path.resolve(themePath))) {
      fs.mkdirSync(path.resolve(themePath), { recursive: true });
    }
    fs.writeFileSync(`${themePath}/index.ts`, theme);

    console.log(`${chalk.green("Project initializated successfully!")}`);
  });

async function createFile(
  componentName: string,
  components: Record<string, Component>,
  basePath?: string,
  overwrite?: boolean
) {
  const component = components[componentName];

  for (const dependency of component.dependencies) {
    await createFile(dependency, components, basePath, overwrite);
  }

  const directoryPath = basePath
    ? `${basePath}/components/${componentName}`
    : path.dirname(component.path);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const filepath = `${directoryPath}/${path.basename(component.path)}`;
  const pathToThemes = path.relative(directoryPath, `${basePath}/themes`);
  const componentFileWithUpdateTheme = component.file.replace(
    "@mailingui/themes",
    pathToThemes
  );

  if (fs.existsSync(filepath) && !overwrite) {
    const response = await prompts({
      type: "confirm",
      name: "confirmation",
      message: `${filepath} already exist, do you want to overwrite?`,
      initial: false,
    });

    if (response.confirmation) {
      fs.writeFileSync(filepath, componentFileWithUpdateTheme);
    }
  } else {
    fs.writeFileSync(filepath, componentFileWithUpdateTheme);
  }

  console.log(
    `Component ${chalk.yellow(
      componentName
    )} downloaded successfully! You can find it at ${chalk.yellow(filepath)}\n`
  );
}

program
  .command("add")
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

program.parse(process.argv);

// const options = program.opts();
