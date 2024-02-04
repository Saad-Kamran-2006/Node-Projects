import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
let convertion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "EUR": 0.0033,
        "PKR": 1.00,
    },
    "USD": {
        "USD": 1.00,
        "GBP": 0.78,
        "EUR": 0.92,
        "PKR": 279.6,
    },
    "GBP": {
        "USD": 1.27,
        "GBP": 1.00,
        "EUR": 1.17,
        "PKR": 356.27,
    },
    "EUR": {
        "USD": 1.09,
        "GBP": 0.85,
        "EUR": 1.00,
        "PKR": 304.04,
    }
};
let currExchange = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP", "EUR"],
        message: chalk.yellow("Select your currency")
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP", "EUR"],
        message: chalk.yellow("Select your conversion currency")
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Select your amount")
    }
]);
const { from, to, amount } = currExchange;
if (from && to && amount) {
    let total = convertion[from][to] * amount;
    log(chalk.yellow(`Your convertion from`), chalk.green(`${from}`), chalk.yellow(`to`), chalk.green(`${to}`), chalk.yellow(`is:`), chalk.blue(`${to}`), chalk.green(`${Math.floor(total)}`));
}
;
