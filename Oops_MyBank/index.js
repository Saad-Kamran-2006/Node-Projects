import { log } from "console";
import chalk from "chalk";
class Account {
    ownerName;
    accountType;
    static randomId = 0;
    balance = 0;
    accountNumber = Account.randomId++;
    constructor(ownerName, accountType) {
        this.ownerName = ownerName;
        this.accountType = accountType;
    }
    ;
    deposit(amount) {
        this.balance += amount;
        log(chalk.yellow(`Deposited: $`), chalk.green(`${amount}`), chalk.yellow(`New Balance: $`), chalk.green(`${this.balance}`));
    }
    ;
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            log(chalk.yellow(`Withdrawl: $`), chalk.green(`${amount}`), chalk.yellow(`New Balance: $`), chalk.green(`${this.balance}`));
        }
        else {
            log(chalk.red("Insufficient Balance"));
        }
        ;
    }
    ;
    setBalance(amount) {
        this.balance = amount;
    }
    getBalance() {
        log(chalk.yellow `$`, chalk.green(`${this.balance}`));
    }
    ;
    status() {
        log(chalk.yellow(`Account Number:`), chalk.green(`${this.accountNumber}`));
        log(chalk.yellow(`Owner Name:`), chalk.green(`${this.ownerName}`));
        log(chalk.yellow(`Account type:`), chalk.green(`${this.accountType}`));
        log(chalk.yellow(`Balance: $`), chalk.green(`${this.balance}`));
    }
    ;
}
;
class Bank extends Account {
    account = [];
    createAccount(name, accountType) {
        const newAccount = new Account(name, accountType);
        this.account.push(newAccount);
        // log(`The Account has been created for ${this.ownerName}${this.accountNumber}`)
        return newAccount;
    }
    ;
    getAccount(accountNumber) {
        return this.account.find(account => account["accountNumber"] === accountNumber);
    }
    ;
}
;
// Usage Example:
const mezan = new Bank();
const user1 = mezan.createAccount("Saad Shah", "current");
const user2 = mezan.createAccount("Sayyam", "saving");
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
