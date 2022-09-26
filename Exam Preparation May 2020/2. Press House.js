function pressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`
       
        }

    }
    
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            if(this.content.length >= 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }
            this.originalResearch = originalResearch;
            if(this.originalResearch.hasOwnProperty('author') === false || this.originalResearch.hasOwnProperty('title') === false) {
                throw new Error("The original research should have author and title.");
            }
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }

        toString() {
           let result = `Title: ${this.title}\nContent: ${this.content}\nOriginal Research: ${this.originalResearch.title } by ${this.originalResearch.author }`;
           if(this.comments.length > 0) {
                result += '\nComments:\n'
                this.comments.forEach((com,i) => {
                    if(i === this.comments.length - 1) {
                        result += com;
                    }else {
                        result += com + '\n';
                    }
                });

           }
           return result;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName,  orderDescription) {
            let obj = {clientName, orderDescription};
            
            this.clients.forEach(o => {
                if(o.clientName === clientName && o.orderDescription === orderDescription) {
                    throw new Error("This client has already ordered this review.");
                }
            })
                this.clients.push(obj);
                return `${clientName } has ordered a review for ${this.book.name}`;
        }

        toString() {
            let result = `Title: ${this.title}\nContent: ${this.content}\nBook: ${this.book.name}`;

            if(this.clients.length > 0) {
                result += '\nOrders:\n'
                this.clients.forEach((ob,i) => {
                    if(i === this.clients.length - 1) {
                        result += `${ob.clientName } - ${ob.orderDescription }`;
                    }else {
                        result += `${ob.clientName } - ${ob.orderDescription }\n`;
                    }
                });
            }
            return result;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }

}

let classes = pressHouse();
let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });
console.log(output = book.toString());


// Unexpected error: Incorrect output: expected 
// 'Title: SpaceX and Javascript\n
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?\n
// Original Research: Dr...

// `Title: SpaceX and Javascript
// Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
// Original Research: Dragon 2 by wikipedia.org`;

let expectedOutput = `Title: The Great Gatsby is so much more than a love story
Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
Book: The Great Gatsby`;

if(output === expectedOutput) {
    console.log(true);
}
// expect(expectedOutput).to.be.equal(output, 'Incorrect output');
// `Title: The Great Gatsby is so much more than a love story
// Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
// Book: The Great Gatsby`;

// `Title: The Great Gatsby is so much more than a love story
// Content: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...
// Book: The Great Gatsby`;