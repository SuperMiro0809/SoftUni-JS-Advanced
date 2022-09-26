class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.peopleLiked = [];
    }

    get likes() {
        if(this._likes[0].likes === 0) {
            return `${this.title} has 0 likes`;
        }else if(this._likes[0].likes === 1) {
            let name = this._likes[0].username;
            return `${name} likes this article!`
        }else {
            let name = this._likes[0].username;
            let Alllikes = this._likes[0].likes - 1;
            return `${name} and ${this.peopleLiked.length - 1} others like this article!`
        }
    }
    like (username) {
        if(this.peopleLiked.includes(username)) {
            throw new Error('You can\'t like the same article twice!');
        }else if(username === this.creator) {
            throw new Error('You can\'t like your own articles!');
        }else {
            if(this._likes.length === 0) {
                let obj = {
                    'username': username,
                    'likes': 1
                }
                this._likes.push(obj);
            }else {
                this._likes[0].likes++;
            }
            this.peopleLiked.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike (username) {
        if(!this.peopleLiked.includes(username)) {
            throw new Error("You can't dislike this article!");
        }else {
            this._likes[0].likes -= 1;
            return `${username} disliked ${this.title}`
        }
    }

    comment (username, content, id) {
        let hasId = false;
        let currObjI = null;

        this._comments.forEach((com, i) => {
            if(com.id === id) {
                hasId = true;
                currObjI = i;
            }
        })

        if(hasId === false || id === undefined) {
            if(id === undefined) {
                if(this._comments.length === 0) {
                    id = this._comments.length + 1;
                }else {
                    id = this._comments.length + 1;
                }
    
            }
            let obj = {
                id: id,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(obj);
            return `${username} commented on ${this.title}`
        }else {
            let replyId = `${id}.${this._comments[currObjI].replies.length + 1}`
            let replyObj = {
                idR: replyId,
                usernameR: username,
                contentR: content
            }
            this._comments[currObjI].replies.push(replyObj);

            return "You replied successfully";
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes[0].likes}\nComments:\n`;
        let sortedComments = this.sorting(sortingType, this._comments);

        let resultArr = [];
        sortedComments.forEach((com, i) => {
                resultArr.push(`-- ${com.id}. ${com.username}: ${com.content}`);
            
            if(com.replies.length > 0) {
                com.replies.forEach((r, index) => {
                        resultArr.push(`--- ${r.idR}. ${r.usernameR}: ${r.contentR}`);
                })
            }
        })
        return result + resultArr.join('\n');
    }

    sorting(sortingType, comments) {
        if(sortingType === 'asc') {
            comments.sort((a,b) => {

                if(a.replies.length === 0 && b.replies === 0) {
                    return a.id - b.id;
                }else {
                    a.replies.sort((aR,bR) => aR.idR.localeCompare(bR.idR));
                    b.replies.sort((aR,bR) => aR.idR.localeCompare(bR.idR));
                    return a.id - b.id;
                }
            })
        }else if(sortingType === 'desc') {
            comments.sort((a,b) => {

                if(a.replies.length === 0 && b.replies === 0) {
                    return b.id - a.id;
                }else {
                    a.replies.sort((aR,bR) => bR.idR.localeCompare(aR.idR));
                    b.replies.sort((aR,bR) => bR.idR.localeCompare(aR.idR));
                    return b.id - a.id;
                }
            });
        }else if(sortingType === 'username') {
            comments.sort((a,b) => {

                if(a.replies.length === 0 && b.replies === 0) {
                    return a.username.localeCompare(b.username);
                }else {
                    a.replies.sort((aR,bR) => aR.usernameR.localeCompare(bR.usernameR));
                    b.replies.sort((aR,bR) => aR.usernameR.localeCompare(bR.usernameR));
                    return a.username.localeCompare(b.username);
                }
            });
        }

        return comments;
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
