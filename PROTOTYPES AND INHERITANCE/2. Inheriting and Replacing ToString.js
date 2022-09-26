function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name,email);
            this.subject = subject;
        }
        toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name,email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

// function toStringExtension() {
//     class Person {
//         constructor(name, email) {
//             this.name = name;
//             this.email = email;
//         }

//         toString() {
//             const className = Object.getPrototypeOf(this).constructor.name;
//             if(className !== "Person") {
//                 return `${className} (name: ${this.name}, email: ${this.email}`;
//             }
//             return `${className} (name: ${this.name}, email: ${this.email})`;
//         }
//     }
//     class Teacher extends Person {
//         constructor(name, email, subject) {
//             super(name,email);
//             this.subject = subject;
//         }
//         toString() {
//             const parentString = super.toString();  
//             return `${parentString}, subject: ${this.subject})`;
//         }
//     }

//     class Student extends Person {
//         constructor(name,email, course) {
//             super(name, email);
//             this.course = course;
//         }
//         toString() {
//             const parentString = super.toString();  
//             return `${parentString}, course: ${this.course})`;
//         }
//     }

//     return {
//         Person,
//         Teacher,
//         Student
//     }
// }






//Unexpected error: expected 
//'Teacher (name: Gosho, email: gosh@gosh.com, subject Graphics)' to equal 
//'Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)'


// Unexpected error: expected 
// 'Teacher (name: Gosho, email: gosh@gosh.com (name: Gosho, email: gosh@gosh.com, subject: Graphics)' to equal 
// 'Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)'