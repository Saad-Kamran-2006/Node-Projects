import { log } from "console";
import inquirer from "inquirer";
import chalk from "chalk";
const Quiz = async () => {
    const quiz = [
        {
            name: "Q1",
            type: "checkbox",
            choices: [
                { name: "It is a anonymous function", value: "1" },
                { name: "The function has a default parameter", value: "2" },
                { name: "The type of the function is not valid", value: "3" },
                { name: "It is a self calling function", value: "4" },
                { name: "It is a named function", value: "5" }
            ],
            message: chalk.yellow("Q: 1 of 3\n\nconst buildName: (firstName: string, lastName?: string) => string = function(firstName: string, lastName = 'Khan'): string {\n\tif(lastName){\n\t\treturn `${firstName} ${lastName}`;\n\t}else{\n\t\treturn `${firstName}`;\n\t};\n};\nWhich of the following statements are correct? (Can select one or more)")
        },
        {
            name: "Q2",
            type: "checkbox",
            choices: [
                { name: "let array1: number[] = [5, 6, 7];", value: "1" },
                { name: "let array2:Array<number> = [1, 2, 3];", value: "2" },
                { name: "let array3 = new Array[number];", value: "3" },
                { name: "let array4: number[] = [];", value: "4" },
                { name: "let array5:number[] = new number[7];", value: "5" }
            ],
            message: chalk.yellow("\nQ: 2 of 3.\n\nWhich of the following is correct syntax in TypeScript to define an array? (Can select one or more)")
        },
        {
            name: "Q3",
            type: "checkbox",
            choices: [
                { name: "Red", value: "1" },
                { name: "Green", value: "2" },
                { name: "Blue", value: "3" },
                { name: "2", value: "4" },
                { name: "3", value: "5" },
                { name: "There will be a compiler error", value: "6" }
            ],
            message: chalk.yellow("\nQ: 3 of 3\n\nconst enum Color {Red = 1, Green, Blue};\nlet colorName: string = Color[2];\nconsole.log(colorName);\n\nWhat will be printed on the console?")
        }
    ];
    const answer = await inquirer.prompt(quiz);
    function checkAnswer(userChoices, correctChoices) {
        return userChoices.sort().toString() === correctChoices.sort().toString();
    }
    ;
    let score = 0;
    const { Q1, Q2, Q3 } = answer;
    if (checkAnswer(Q1, ["1", "2", "5"])) {
        score++;
    }
    if (checkAnswer(Q2, ["1", "2", "4"])) {
        score++;
    }
    if (checkAnswer(Q3, ["6"])) {
        score++;
    }
    ;
    log(chalk.yellow(`Your score:`), chalk.green(`${score}`), chalk.yellow(`out of`), chalk.green(`${quiz.length}`));
};
Quiz();
