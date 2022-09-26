class Forum {
    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
        this.logged = [];
    }

    register(username, password, repeatPassword, email) {
        let obj = {username, password, email};
        if(username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }else if(password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }else {
            this.users.forEach(user => {
                if(user.username === username || user.email === email) {
                    throw new Error('This user already exists!');
                }
            });

            this.users.push(obj);
            return `${username} with ${email} was registered successfully!`;
        }
        
    }

    login(username, password) {
        let isFound = false;
        let currUser = null;

        this.users.forEach(user => {
            if(user.username === username) {
                currUser = user;
                isFound = true;
            }
        });

        if(isFound) {
            if(currUser.password === password) {
                this.logged.push({username, password});
                return 'Hello! You have logged in successfully';
            }
        }else {
            throw new Error('There is no such user')
        }
    }

    logout(username, password) {
       let isLogged = false;
       let index = 0;

       this.logged.forEach((user, i) => {
           if(user.username === username) {
               index = i;
               isLogged = true;
           }
       });

       if(isLogged) {
           if(this.logged[index].password === password) {
                this.logged.splice(index, 1);
                return 'You have logged out successfully';
           }
       }else {
           throw new Error('There is no such user');
       }
    }

    postQuestion(username, question) {
        let isFound = false;
        let isLogged = false;

        this.users.forEach(user => {
            if(user.username === username) {
                isFound = true;
            }
        });

        this.logged.forEach(user => {
            if(user.username === username) {
                isLogged = true;
            }
        });

        if(isFound === false || isLogged === false) {
            throw new Error('You should be logged in to post questions');
        }else if(question === '') {
            throw new Error('Invalid question');
        }else {
            let id = this.id;
            let obj = {};
            obj.id = id;
            obj.question = question;
            obj.username = username;
            obj.answers = [];
            this.questions.push(obj);

            this.id += 1;

            return 'Your question has been posted successfully';
        }   
    } 

    postAnswer(username, questionId, answer) {
        let isFound = false;
        let isLogged = false;

        this.users.forEach(user => {
            if(user.username === username) {
                isFound = true;
            }
        });

        this.logged.forEach(user => {
            if(user.username === username) {
                isLogged = true;
            }
        });

        if(isFound === false || isLogged === false) {
            throw new Error('You should be logged in to post answers');
        }else if(answer === '') {
            throw new Error('Invalid answer');
        }else {
            let isTrue = false;
            let currQ = null;

            this.questions.forEach(q => {
                if(q.id === questionId) {
                    currQ = q;
                    isTrue = true;
                }
            });

            if(isTrue) {
                let answerObj = {
                    username: username,
                    answer: answer
                }
                currQ.answers.push(answerObj);
                return 'Your answer has been posted successfully';
            }else {
                throw new Error('There is no such question');
            }
        }
    }

    showQuestions() {
        let result = "";

        this.questions.forEach((q, i) => {
            result += `Question ${q.id} by ${q.username}: ${q.question}`;
            //result.push(str);
            if(q.answers.length > 0) {
                q.answers.forEach(a => {
                    result += `\n---${a.username}: ${a.answer}`;
                    //result.push(strA);
                })
            }

            if(i !== this.questions.length - 1) {
                result += '\n';
            }
        });

        return result;
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions())

 





'Question 1 by Michael: Can I rent a snowboard from your shop?\n---Michael: Yes, I have rented one last year.\nQuestion 2 by Stoyan: How long are supposed to be the ski for my daughter?\n---Stoyan: How old is she?\n---Stoyan: Tell us how tall she is.'
'Question 1 by Michael: Can I rent a snowboard from your shop?\n---Stoyan: Yes, I have rented one last year.\nQuestion 2 by Stoyan: How long are supposed to be the ski for my daughter?\n---Michael: How old is she?\n---Michael: Tell us how tall she is.'