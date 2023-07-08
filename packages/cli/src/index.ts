import { Command } from "commander"; // add this line
import { existsSync } from "fs";
import path from "path";
import fs from "fs";
import prompts from "prompts";
import { getAvailableComponents } from "./utils/get-components";
import { Component } from "./types";
import chalk from "chalk";

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
  .action(() => {
    const srcDirExists: boolean = existsSync(path.resolve("./src"));

    // Ensure lib directory exists.
    const libDir = srcDirExists ? "./src/lib" : "./lib";
    if (!existsSync(path.resolve(libDir))) {
      fs.mkdirSync(path.resolve(libDir), { recursive: true });
    }
  });

async function createFile(
  componentName: string,
  components: Record<string, Component>
) {
  const component = components[componentName];

  const directoryPath = path.dirname(component.path);

  for (const dependency of component.dependencies) {
    await createFile(dependency, components);
  }

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  if (fs.existsSync(component.path)) {
    const response = await prompts({
      type: "confirm",
      name: "confirmation",
      message: `${component.path} already exist, do you want to overwrite?`,
      initial: false,
    });

    if (response.confirmation) {
      fs.writeFileSync(component.path, component.file);
    }
  } else {
    fs.writeFileSync(component.path, component.file);
  }
}

program
  .command("add")
  .description("add components and templates to your project")
  .argument("items", "name of the item")
  .action(async (componentName: string) => {
    const { components } = await getAvailableComponents();
    if (!components[componentName]) {
      chalk.red("Not a valid choice");
    } else {
      await createFile(componentName, components);
    }
  });

program.parse(process.argv);

// const options = program.opts();
