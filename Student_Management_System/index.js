import { log } from "console";
import chalk from "chalk";
class Student {
    name;
    courses;
    static idCount = 1;
    id = Student.idCount++;
    balance = Math.floor(Math.random() * 1000);
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
    ;
    enroll() {
        log(chalk.yellow(`Enrolling`), chalk.green(`${this.name}`), chalk.yellow(`with ID:`), chalk.green(`${this.id}`), chalk.yellow(`in courses:`), chalk.green(`${this.courses.join(", ")}`));
    }
    ;
    viewBalance() {
        log(chalk.yellow(`Balance for Student`), chalk.green(`${this.name}`), chalk.yellow(`ID:`), chalk.green(`${this.id}`), chalk.yellow(`is: $`), chalk.green(`${this.balance}`));
    }
    payTution(amount) {
        this.balance -= amount;
        log(chalk.yellow(`The amount of $`), chalk.green(`${amount}`), chalk.yellow(`recieved for Student`), chalk.green(`${this.name}`), chalk.yellow(`ID:`), chalk.green(`${this.id}`));
    }
    ;
    Status() {
        log(chalk.yellow(`ID:`), chalk.green(`${this.id}`), chalk.yellow(`\nName:`), chalk.green(`${this.name}`), chalk.yellow(`\nCourses:`), chalk.green(`${this.courses.join(", ")}`), chalk.yellow(`\nBalance: $`), chalk.green(`${this.balance}`));
    }
    ;
}
;
class StudentManagementSystem {
    student = [];
    addStudent(name, courses) {
        const newStudent = new Student(name, courses);
        this.student.push(newStudent);
        return newStudent;
    }
    ;
    findStudentById(id) {
        return this.student.find(student => student.id === id);
    }
    ;
}
;
const sms = new StudentManagementSystem();
const student1 = sms.addStudent("Saad", ["GenAI"]);
const student2 = sms.addStudent("Frees", ["Web Development"]);
const student3 = sms.addStudent("Sayyam", ["Typescript"]);
// Enroll
student1.enroll();
student2.enroll();
student3.enroll();
// Status
student1.Status();
student2.Status();
student3.Status();
// Find Student
log(sms.findStudentById(1));
log(sms.findStudentById(2));
log(sms.findStudentById(3));
