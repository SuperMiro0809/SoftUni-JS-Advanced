function solve(arr) {
    let res = [];

    let commands = {
        add: (word) => {
            return res.push(word);
        },
        remove: (word) => {
            res.forEach(w => {
                if(w === word) {
                    let i = res.indexOf(w);
                    res.splice(i, 1);
                }
            })
        },
        print: () => {
            console.log(res.join(","));
        }
    }
    
    function result(command, word) {
        return commands[command](word);
    }

    for(let i = 0; i < arr.length; i++) {
        let [command, word] = arr[i].split(" ");

        result(command, word);
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])