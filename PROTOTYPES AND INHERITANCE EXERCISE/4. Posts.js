function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString(){
            let result = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0) {
                result += `\nComments:\n`;
            this.comments.forEach((com,i) => {
                if(i === this.comments.length -1) {
                    result += ` * ${com}`
                }else {
                   result += ` * ${com}\n` 
                }
                
            });
            }
            return result;            
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }
    // let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

    // // scm.addComment("Good post");
    // // scm.addComment("Very good post");
    // // scm.addComment("Wow!");
    
    // console.log(scm.toString());

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}


let classes = solve();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

// let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

// test.addComment("1");
// test.addComment("2");
// test.addComment("3");
// console.log(test.toString())
// expected 
// 'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * 1\n * 2\n * 3\n' to equal 
// 'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * ...