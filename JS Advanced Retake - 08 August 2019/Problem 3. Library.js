class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if(!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        }

         let isSubscibed = false;
         let index = 0

         this.subscribers.forEach((sub,i) => {
             if(sub.name === name) {
                 index = i;
                 isSubscibed = true;
             }
         });

         if(!isSubscibed) {
             let obj = {
                 name: name,
                 type: type,
                 books: []
             }

             this.subscribers.push(obj);
             return this.subscribers[this.subscribers.length - 1];
         }else {
            this.subscribers[index].type = type;
            return this.subscribers[index];
         }
    }

    unsubscribe(name) {
        let isSubscibed = false;
        let index = 0;

        this.subscribers.forEach((sub,i) => {
            if(sub.name === name) {
                index = i;
                isSubscibed = true;
            }
        });

        if(isSubscibed) {
            this.subscribers.splice(index, 1);
            return this.subscribers;
        }else {
            throw new Error(`There is no such subscriber as ${name}`);
        }
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let isSubscibed = false;
        let index = 0;

        this.subscribers.forEach((sub,i) => {
            if(sub.name === subscriberName) {
                index = i;
                isSubscibed = true;
            }
        });

        let subscriptionType = this.subscribers[index].type;
        if(isSubscibed) {
            let books = this.subscribers[index].books;
                if(books.length >= this.subscriptionTypes[subscriptionType]) {
                    throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriptionType]}!`);
                }else {
                    let bookObj = {
                        title: bookTitle, 
                        author: bookAuthor
                    };
                    this.subscribers[index].books.push(bookObj);
                    return this.subscribers[index];
                }
        }else {
            throw new Error(`There is no such subscriber as ${name}`);
        }

    }

    showInfo () {
        let subscribers = this.subscribers;
        let result = '';

        if(subscribers.length === 0) {
            throw new Error(`${this.libraryName} has no information about any subscribers`)
        }

        subscribers.forEach((sub, i) => {
            result += `Subscriber: ${sub.name}, Type: ${sub.type}\nReceived books: `;

            let bookRes = [];
            if(sub.books.length > 0) {

                sub.books.forEach(book => {

                    let str = `${book.title} by ${book.author}`;
                    bookRes.push(str);
                });
                    result += bookRes.join(', ') + '\n';    
            }
        })

        return result;
    }
}

let lib = new Library('L');

//act
lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Josh','vip')

let actualSubscribers = lib.subscribers;
let expectedSubscribers = [
    {name: 'Peter', type: 'normal', books: []},
    {name: 'John', type: 'special', books: []},
    {name: 'Josh', type: 'vip', books: []},
];

//assert.deepEqual(actualSubscribers, expectedSubscribers, "The subscriber's property has different structure");

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
lib.receiveBook('Josh', 'Graf Monte Cristo', 'Alexandre Dumas');
lib.receiveBook('Josh','Cromwell','Victor Hugo');
lib.receiveBook('Josh','Marie Tudor','Victor Hugo');
lib.receiveBook('Josh','Bug-Jargal','Victor Hugo');
lib.receiveBook('Josh','Les Orientales','Victor Hugo');
lib.receiveBook('Josh','Marion de Lorme','Victor Hugo');

let actualFirstSubBooks = lib.subscribers[0].books;
let expectedFirstSubBooks = [
  { title: 'Lord of the rings', author: 'J. R. R. Tolkien' }
];
console.log(actualFirstSubBooks)
console.log(lib.showInfo());



// expected 
// 'Subscriber: Alex, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Jerry, Type: special\nReceived books: The Black Tulip by Alexandre Dumas, The Wolf Leader by Alexandre Dumas' 
// 'Subscriber: Alex, Type: normal\nReceived books: Lord of the rings by J. R. R. Tolkien\nSubscriber: Jerry, Type: special\nReceived books: The Black Tulip by Alexandre Dumas, The Wolf Leader by Alexandre Dumas\n'