import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
let input = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("Enter your sentence to count your words")
    }
]);
const { sentence } = input;
let words = sentence.trim().split(" ");
log(chalk.yellow(`Your words count in sentence is:`), chalk.green(`${words.length}`));
