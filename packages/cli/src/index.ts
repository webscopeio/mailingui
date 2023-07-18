import { Command } from "commander"; // add this line
import { add } from "./commands/add";
import { init } from "./commands/init";

const program = new Command();

program
  .action(() => {
    // default action is to show help
    program.help();
  })
  .version("1.0.0")
  .description("");

program.addCommand(init).addCommand(add);

program.parse(process.argv);

// const options = program.opts();
