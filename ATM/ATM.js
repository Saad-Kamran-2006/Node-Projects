import { log } from "console";
// type Login = {
//     userId: number;
//     pin: number;
// };
// const loginInfo: Login = {
//     userId: 7223,
//     pin: 72234638
// };
// const {userId, pin} = loginInfo;
// const Atm = async () => {
//     const login = await inquirer.prompt([
//         {
//             name: "userId",
//             type: "number",
//             message: chalk.blue("Enter your User Id")
//         },
//         {
//             name: "pin",
//             type: "number",
//             message: chalk.blue("Enter your Pin")
//         }
//     ]);
//     if(userId === login.userId && pin === login.pin){
//         const account = await inquirer.prompt([
//             {
//                 name: "type",
//                 type: "list",
//                 choices: ["Current", "Saving"],
//                 message: chalk.yellow("Select your account type")
//             }
//         ]);
//         const {type} = account;
//         if(type === "Current"){
//             var method = await inquirer.prompt([
//                 {
//                     name: "transaction",
//                     type: "list",
//                     choices: ["Deposit", "Withdraw"],
//                     message: chalk.yellow("Select transaction method")
//                 }
//             ]);
//         }else if(type === "Saving"){
//             var method = await inquirer.prompt([
//                 {
//                     name: "transaction",
//                     type: "list",
//                     choices: ["Deposit", "Withdraw"],
//                     message: chalk.yellow("Select transaction method")
//                 }
//             ]);
//         };
//         const {transaction} = method;
//         if(transaction === "Deposit"){
//             var deposit = await inquirer.prompt([
//                 {
//                     name: "amount",
//                     type: "number",
//                     message: chalk.blue("Enter your amount")
//                 }
//             ]);
//         }else if(transaction === "Withdraw"){
//             var withdraw = await inquirer.prompt([
//                 {
//                     name: "amount",
//                     type: "list",
//                     choices: ["1000", "5000", "10000", "50000"],
//                     message: chalk.blue("Select your amount")
//                 }
//             ]);
//         };
//     }else{
//         log(chalk.red("Invalid! UserId or Pin"));
//     };
//     if(login.userId && login.pin){
//         let balance: number = Math.floor(Math.random() * 1000000);
//         log(chalk.blue("Your Current Balance is", balance));
//         const {transaction} = method;
//         if(transaction === "Deposit"){
//             let new_Balance: number = balance + deposit.amount;
//             log(chalk.green("Your New Balance is", new_Balance));
//         }else if(transaction === "Withdraw" && balance >= withdraw.amount){
//             let remaining: number = balance - withdraw.amount;
//             log(chalk.green("Your Remaining Balance is", remaining));
//         }else{
//             log(chalk.red("Insufficient Balance!"));
//         };
//     };
// };
// Atm();
let myAdd2 = function (x, y) {
    return x + y;
};
// 
// A) it is a anounymous function
// B) it is self calling function
// C) it is named function
// D) it is a lambda function
// E) it is a invalid function
let val = 42;
let squ_Val = val * val;
log(typeof squ_Val);
let flag = true;
let iflag = !flag;
log(typeof iflag);
