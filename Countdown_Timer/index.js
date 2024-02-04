import { log, clear } from "console";
import chalk from "chalk";
// Date Object:
let dateObj = new Date();
log(dateObj);
// Current Date:
let date = ("0" + dateObj.getDate()).slice(-2);
// Current Month:
let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
// Current Year:
let year = dateObj.getFullYear();
log(chalk.yellow(`Date:`), chalk.green(`${date}-${month}-${year}`));
// Current Hours:
let hours = dateObj.getHours() - 12;
// Current Minutes:
let minutes = dateObj.getMinutes();
// Current Seconds:
let seconds = dateObj.getSeconds();
const time = "0" + (dateObj.toLocaleTimeString()).slice(-10);
log(chalk.yellow(`Time:`), chalk.green(`${time}`));
const date_Time = `${year}-${month}-${date}`;
log(chalk.yellow(`Date & Time:`), chalk.green(`${date_Time} ${time}`));
// Countdown Timer:
const calculateTimeDifference = (targetDate) => {
    const currentDate = new Date();
    const difference = targetDate.getTime() - currentDate.getTime();
    return difference > 0 ? difference : 0;
};
const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    return chalk.green(`${seconds}`, chalk.yellow(`second`));
};
const updateCountdown = (targetDate) => {
    const remainingTime = calculateTimeDifference(targetDate);
    const formattedTime = formatTime(remainingTime);
    clear();
    log(chalk.yellow(`Countdown Timer:`), `${formattedTime}`);
    if (remainingTime === 0) {
        log(chalk.yellow("Countdown Timer Expired!"));
        clearInterval(timerInterval);
    }
    ;
};
// // Set the target time for 10 seconds from the current time
const targetDate = new Date();
targetDate.setSeconds(targetDate.getSeconds() + 12);
// // Update the countdown every second
const timerInterval = setInterval(() => {
    updateCountdown(targetDate);
}, 1000);
