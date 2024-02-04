import { log } from "console";
import chalk from "chalk";

class Account {
    private static randomId: number = 0;
    private balance: number = 0;
    private accountNumber = Account.randomId++;
    constructor(
        private ownerName?: string,
        private accountType?: string
    ){};
    deposit(amount: number): void {
        this.balance += amount;
        log(chalk.yellow(`Deposited: $`), chalk.green(`${amount}`), chalk.yellow(`New Balance: $`), chalk.green(`${this.balance}`));
    };
    withdraw(amount: number): void {
        if(this.balance >= amount){
            this.balance -= amount;
        log(chalk.yellow(`Withdrawl: $`), chalk.green(`${amount}`), chalk.yellow(`New Balance: $`), chalk.green(`${this.balance}`));
        }else{
            log(chalk.red("Insufficient Balance"));
        };
    };
    setBalance(amount: number): void {
        this.balance = amount
    }
    getBalance(): void {
        log(chalk.yellow`$`, chalk.green(`${this.balance}`));
    };
    status(): void {
        log(chalk.yellow(`Account Number:`), chalk.green(`${this.accountNumber}`));
        log(chalk.yellow(`Owner Name:`), chalk.green(`${this.ownerName}`));
        log(chalk.yellow(`Account type:`), chalk.green(`${this.accountType}`))
        log(chalk.yellow(`Balance: $`), chalk.green(`${this.balance}`));
    };
};
class Bank extends Account {
    private account: Account[] = [];
    createAccount(name: string, accountType: string){
        const newAccount: Account = new Account(name, accountType);
        this.account.push(newAccount);
        // log(`The Account has been created for ${this.ownerName}${this.accountNumber}`)
        return newAccount;
    };
    getAccount(accountNumber: number): Account | undefined {
        return this.account.find(account => account["accountNumber"] === accountNumber);
    };
};
// Usage Example:
const mezan: Bank = new Bank();

const user1: Account = mezan.createAccount("Saad Shah", "current");
const user2: Account = mezan.createAccount("Sayyam", "saving");

// Set Balance:
user1.setBalance(5000);
user2.setBalance(3000);

// Get Balance:
user1.getBalance();
user2.getBalance();

// Deposit:
user1.deposit(2000);
user2.deposit(1000);

// Withdraw:
user1.withdraw(1000);
user2.withdraw(500);

// Status:
user1.status();
user2.status();

// Get Account by Id:
log(mezan.getAccount(1));
log(mezan.getAccount(2));