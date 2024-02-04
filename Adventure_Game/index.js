import { log } from "console";
import inquirer from 'inquirer';
import chalk from "chalk";
let enemy = {
    name: "Dragon",
    health: 100
};
let randomEvent = [
    chalk.green("You kill the Dragon and win the game."),
    chalk.red("Dragon wakes up by hear your foot steps and kill you."),
    chalk.redBright("Your aim missed and Dragon make attack on you.")
];
const introduction = () => {
    console.log(chalk.yellow(`Welcome,`), chalk.green(`${player.name}`), chalk.yellow(`to the Text-Based Adventure Game!\n`));
    console.log(chalk.yellow(`You find yourself in a mysterious place. Your goal is to survive and to kill the`), chalk.green(`${enemy.name}.`));
    console.log(chalk.yellow(`You have`, chalk.green(`${player.health}`), chalk.yellow(`health points. Best of Luck!\n`)));
};
const playerName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.yellow("Enter your Name")
    }
]);
const { name } = playerName;
const player = {
    name: name,
    health: 100
};
introduction();
const startGame = async () => {
    const choice = await inquirer.prompt([
        {
            name: "weapon",
            type: "list",
            choices: ["Hunting Rifle", "Sword", "Archery Bow"],
            message: chalk.yellow("Choose your favourite weapon")
        }
    ]);
    const { weapon } = choice;
    switch (weapon) {
        case "Hunting Rifle":
            log(chalk.green("I think it's not a better choice."));
            break;
        case "Sword":
            log(chalk.green("Excellent choice, but this gonna be some riskey."));
            break;
        case "Archery Bow":
            log(chalk.green("Good choice, but you need accuracy to use it."));
            break;
    }
    ;
    const body = await inquirer.prompt([
        {
            name: "attack",
            type: "list",
            choices: ["Head", "Neck", "Chest"],
            message: chalk.yellow("Alright Dragon is sleeping it's a right time. Where you want to attack.")
        }
    ]);
    const { attack } = body;
    switch (attack) {
        case "Head":
            log(chalk.blue(`${player.name}`), chalk.green(`you need to do a powerfull attack to damage his brain.`));
            break;
        case "Neck":
            log(chalk.blue(`${player.name}`), chalk.green(`you need to do consistent attack on Neck to cut body to brain connection.`));
            break;
        case "Chest":
            log(chalk.yellow(`${player.name}`), chalk.green(`this is the weakest area with more danger. You need to attack on his heart.`));
            break;
    }
    ;
    let idx = Math.floor(Math.random() * randomEvent.length);
    if (idx === 1) {
        log(randomEvent[idx]);
        player.health -= 100;
        log(chalk.red(`Game Over! You have run out of health:`), chalk.green(`${player.health}`));
    }
    else if (idx === 2) {
        player.health -= 50;
        log(randomEvent[idx]);
        log(chalk.redBright(`Be careful! Your health point is too low:`), chalk.green(`${player.health}`));
        const Again = await inquirer.prompt([
            {
                name: "attack",
                type: "list",
                choices: ["Head", "Neck", "Chest"],
                message: chalk.yellow("Be aware this time Dragon wake up. Where you want to attack.")
            }
        ]);
        let idx1 = Math.floor(Math.random() * randomEvent.length - 1);
        if (idx1 === 0) {
            player.health += 50;
            log(randomEvent[idx]);
            log(chalk.yellow(`Your health point is full:`), chalk.green(`${player.health}`));
        }
        else if (idx1 === 1) {
            player.health -= 50;
            log(randomEvent[idx]);
            log(chalk.red(`Game Over! You have run out of health:`), chalk.green(`${player.health}`));
        }
        ;
    }
    else if (idx === 0) {
        log(randomEvent[idx]);
        log(chalk.yellow(`Your health point is full:`), chalk.green(`${player.health}`));
    }
    ;
};
const restart = async () => {
    do {
        await startGame();
        player.health = 100;
        var game = await inquirer.prompt([
            {
                name: "again",
                type: "list",
                choices: ["Yes", "No"],
                message: "Do you want to continue"
            }
        ]);
    } while (game.again === "Yes");
    if (game.again === "No") {
        log(chalk.green("Thanks for playing! Goodbye"));
    }
};
restart();
