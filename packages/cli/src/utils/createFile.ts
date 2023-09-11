import path from "path";
import fs from "fs";
import prompts from "prompts";
import chalk from "chalk";
import { Component } from "../types";

export async function createFile(
  componentName: string,
  components: Record<string, Component>,
  basePath: string,
  overwrite?: boolean
) {
  const component = components[componentName];

  for (const dependency of component.dependencies) {
    await createFile(dependency, components, basePath, overwrite);
  }

  const directoryPath = `${basePath}/components/${path.basename(
    path.dirname(component.path)
  )}`;

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const filepath = `${directoryPath}/${path.basename(component.path)}`;
  const pathToThemes = path.relative(directoryPath, `${basePath}/themes`);
  const pathToUtils = path.relative(directoryPath, `${basePath}/utils`);
  const updatedComponent = component.file
    .replace("@mailingui/themes", pathToThemes)
    .replace("@mailingui/utils", pathToUtils);

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

  const index = fs.readFileSync(`${basePath}/components/index.ts`, "utf8");
  const indexLine = `\nexport { ${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  } } from "./${componentName}/${
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  }";\n`;
  if (!index.includes(indexLine)) {
    const updatedIndex = index + indexLine;
    fs.writeFileSync(`${basePath}/components/index.ts`, updatedIndex);
  }
  fs.writeFileSync(filepath, updatedComponent);
  console.log(
    `Component ${chalk.yellow(
      componentName
    )} downloaded successfully! You can find it at ${chalk.yellow(filepath)}\n`
  );
}
