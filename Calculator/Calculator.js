import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
// // Addition Operator:
export const addition = (num1, num2) => {
    return num1 + num2;
};
// // Subtraction Operator:
export const subtraction = (num1, num2) => {
    return num1 - num2;
};
// // Multiplication Operator:
export const multiplication = (num1, num2) => {
    return num1 * num2;
};
// // Division Operator:
export const division = (num1, num2) => {
    return num1 / num2;
};
// // Calculate Function:
const calculate = async () => {
    ;
    // // Choice Inquirer:
    const Operator = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: chalk.yellow("Choose your Method"),
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division"]
        }
    ]);
    // // Input Inquirer:
    const input = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: chalk.yellow("Enter Your First Number")
        },
        {
            name: "num2",
            type: "number",
            message: chalk.yellow("Enter Your Second Number")
        },
    ]);
    const { choice } = Operator;
    const { num1, num2 } = input;
    if (choice === "+ Addition") {
        log(addition(num1, num2));
    }
    else if (choice === "- Subtraction") {
        log(subtraction(num1, num2));
    }
    else if (choice === "* Multiplication") {
        log(multiplication(num1, num2));
    }
    else if (choice === "/ Division") {
        log(division(num1, num2));
    }
    ;
};
// // Repeat Function:
const Continue = async () => {
    do {
        // Calculate Function Call:
        await calculate();
        var repeat = await inquirer.prompt([
            {
                name: "again",
                type: "list",
                message: chalk.yellow("Do you want to Continue or Not"),
                choices: ["Yes", "No"]
            }
        ]);
    } while (repeat.again === "Yes");
};
// // Repeat Function Call:
Continue();
