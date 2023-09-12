import path from "path";
import fs from "fs";
import prompts from "prompts";
import chalk from "chalk";
import { Component } from "../types";

export async function createFile(
  name: string,
  components: Record<string, Component>,
  basePath: string,
  overwrite?: boolean
) {
  const component = components[name];

  for (const dependency of component.dependencies) {
    await createFile(dependency, components, basePath, overwrite);
  }

  const componentDir = `${basePath}/components/${component.type}`;

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  const filepath = `${componentDir}/${component.filename}`;

  // Overwrite prompt
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

  // Replace path aliases for relative paths
  const pathToThemes = path.relative(componentDir, `${basePath}/themes`);
  const pathToUtils = path.relative(componentDir, `${basePath}/utils`);
  const updatedComponent = component.file
    .replace("@mailingui/themes", pathToThemes)
    .replace("@mailingui/utils", pathToUtils);

  // Create component
  fs.writeFileSync(filepath, updatedComponent);

  // Export the component from index
  const index = fs.readFileSync(`${basePath}/components/index.ts`, "utf8");

  const indexLine = `\nexport { ${component.exports} } from "./${
    component.type
  }/${component.filename.replace(/\.[^.]+$/, "")}";\n`;

  if (!index.includes(indexLine)) {
    const updatedIndex = index + indexLine;
    fs.writeFileSync(`${basePath}/components/index.ts`, updatedIndex);
  }

  // Installation Success
  console.log(
    `Component ${chalk.yellow(
      name
    )} downloaded successfully! You can find it at ${chalk.yellow(filepath)}\n`
  );
}
