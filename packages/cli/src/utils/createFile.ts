import path from "path";
import { Component } from "../types";
import fs from "fs";
import prompts from "prompts";
import chalk from "chalk";

export async function createFile(
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

    if (!response.confirmation) {
      return;
    }
  }

  fs.writeFileSync(filepath, componentFileWithUpdateTheme);
  console.log(
    `Component ${chalk.yellow(
      componentName
    )} downloaded successfully! You can find it at ${chalk.yellow(filepath)}\n`
  );
}
