import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let loop = true;
while (loop) {
    const input = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: chalk.green("What do you want to in your todo list?")
        },
        {
            name: "addTodos",
            type: "confirm",
            default: false,
            message: chalk.green("Do you want to add more Todos?")
        }
    ]);
    const { TODO, addTodos } = input;
    loop = addTodos;
    if (TODO) {
        todos.push(TODO);
    }
    ;
}
;
if (todos.length > 0) {
    log(chalk.yellow("Your Todo List:"));
    for (let i = 0; i < todos.length; i++) {
        log(`${i + 1})`, chalk.green(`${todos[i]}`));
    }
    ;
}
else {
    log(chalk.red("No Todos found!"));
}
;
