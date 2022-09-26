class Company{
        constructor() {
            this.departments = [];
        }

        addEmployee(username, salary, position, department) {
            this._validateParam(username);
            this._validateParam(salary);
            this._validateParam(position);
            this._validateParam(department);
        
            if(salary < 0) {
                throw new Error("Invalid input!");
            }
                let currDepartment = this.departments.find(d => d.name === department);

                if(currDepartment === undefined) {
                    currDepartment = {
                        name: department,
                        employees: []
                    }
                    this.departments.push(currDepartment);
                }

                let employeeObj = {
                    username: username,
                    salary: salary,
                    position: position
                }
                currDepartment.employees.push(employeeObj);
                return `New employee is hired. Name: ${username}. Position: ${position}`;
           
            
        }
        bestDepartment() {
            let maxAvr = 0;
            let dep = '';
            let depIndex = 0;
            for(let obj of this.departments) {
                let currAvr = 0;
                for(let employeesObj of obj.employees) {
                    currAvr += employeesObj.salary
                }
                currAvr /= obj.employees.length;
                if(currAvr > maxAvr) {
                    maxAvr = currAvr;
                    dep = obj.name;
                    depIndex = this.departments.indexOf(obj);
                }   
            }
            let result = [
             `Best Department is: ${dep}`,
             `Average salary: ${maxAvr.toFixed(2)}`,
            ];

            let employeesARR = this.departments[depIndex].employees;
            employeesARR.sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username));
            employeesARR.forEach(employee => {
                    result.push(`${employee.username} ${employee.salary} ${employee.position}`);
            });
            return result.join('\n');
        }

        _validateParam(param) {
            if(param === '' || param === undefined || param === null) {
                throw new Error("Invalid input!");
            }
        }

    }
    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment())

//    'Best department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR' to equal 
//    'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'

//14
    //     if((username === '' || username === undefined || username === null) || 
        //     (position === '' || position === undefined || position === null) ||
        //     (department === '' || department === undefined || department === null) ||
        //     (salary === '' || salary === undefined || salary === null)) {
        //         throw new Error("Invalid input!");
        //     }else if(salary < 0) {
        //         throw new Error("Invalid input!");
        //    }else {