import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";

// // Welcome function:

const welcome = () => {
    let text = chalk.blue("Welcome in our number Guessing game");
    log(text);
};

// Welcome Function Call:

welcome();

// // Guess Function:

const Guess_num = async () => {
    const random: number = Math.floor(Math.random() * 11);
    log(random);
    const guess = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: chalk.yellow("Guess a number from 1 to 10")
        }
    ]);
    const {num} = guess;
    if(num > 10 || num < 1){
        log(chalk.red("Please! Enter a number from 1 to 10"));
    }else if(num != num){
        log(chalk.red("Please! Enter a valid number from 1 to 10"));
    }else if(num === random){
        log(chalk.green("Congratulations! You Guess the correct number"));
    }else if(num !== random){
        log(chalk.blue("You missed, Better luck next time"));
    };
};

// // Continue Function:

const Continue = async () => {
    do{
        // Guess Function Call:
        await Guess_num();
        var repeat = await inquirer.prompt([
            {
                name: "again",
                type: "list",
                message: chalk.yellow("Do you want to Continue?"),
                choices: ["Yes", "No"]
            }
        ]);
    }while(repeat.again === "Yes");
    if(repeat.again === "No"){
        log(chalk.green("Thanks for playing."));
    };
};

// // Continue Function Call:

Continue();