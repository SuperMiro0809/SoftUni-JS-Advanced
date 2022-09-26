function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            console.log(currTask);
            this.tasks.push(currTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.calcSalary()} this month.`);
        }

        calcSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${name} is working on a simple task.`);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${name} is working on a complicated task.`);
            this.tasks.push(`${name} is taking time off work.`);
            this.tasks.push(`${name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age, dividend) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(`${name} scheduled a meeting.`);
            this.tasks.push(`${name} is preparing a quarterly report.`);
        }

        calcSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

let res = solve();
var guy1 = new res.Junior('dragan', 23);
guy1.collectSalary()
var guy2 = new res.Senior('petkan', 24);
var guy3 = new res.Manager('bojan', 25);

