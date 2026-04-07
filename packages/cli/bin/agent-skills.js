#!/usr/bin/env node
import { getCommand } from "../src/commands/get.js";
import { listCommand } from "../src/commands/list.js";
import { searchCommand } from "../src/commands/search.js";

const [, , command, ...args] = process.argv;

const printHelp = () => {
  console.log(`agent-skills CLI\n\nCommands:\n  list [--category name]\n  search <query>\n  get <slug> [--output path]`);
};

if (!command || command === "help" || command === "--help") {
  printHelp();
  process.exit(0);
}

if (command === "list") {
  await listCommand(args);
} else if (command === "search") {
  await searchCommand(args);
} else if (command === "get") {
  await getCommand(args);
} else {
  printHelp();
  process.exit(1);
}
