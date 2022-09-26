class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(newId) {
        if(newId.toString().length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }else {
            this._clientId = newId;
        }
    }

    set email(newEmail) {
        if(/[A-Za-z]+@[A-Za-z]+.[A-Za-z]+/g.test(newEmail)) {
            this._email = newEmail;
        }else {
            throw new TypeError('Invalid e-mail');
        }
    }

    set firstName(newFirstName) {
        if(newFirstName.length < 3 || newFirstName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if(!/[A-Za-z]+/.test(newFirstName)) {
            throw new TypeError('First name must contain only Latin characters')
        }
        this._firstName = newFirstName;

    }

    set lastName(newLastName) {
        if(newLastName.length < 3 || newLastName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if(!/[A-Za-z]+/.test(newLastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = newLastName;

        
    }

    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Iv3an', 'Petrov')

