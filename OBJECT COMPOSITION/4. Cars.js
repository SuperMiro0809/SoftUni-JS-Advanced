function solve(arr) {
    let resObj = {};
    let commands = {
        create: (name, inheritName, parentName) => {
            if (inheritName !== 'inherit') {
                resObj[name] = {};

                return resObj;
            } else {
                let parent = resObj[parentName];
                resObj[name] = Object.create(parent); //наследяване

                return resObj;
            }
        },
        set: (name, key, val) => {
            return resObj[name][key] = val;
        },
        print: (name) => {
            let obj = resObj[name];
            let resultStr = '';
            let index = 0;
            for (let key in obj) { // for in ни дава възможност да вземем тези неща, които са от прототипа
                if(index >= 1) {
                    resultStr += ', ';
                }
                resultStr += `${key}:${obj[key]}`;
                index++;
            }

            console.log(resultStr);

            return resObj;
        }
    }

    function resultObjFormation(command, name, key, val) {
        return commands[command](name, key, val);
    }

    for (let i = 0; i < arr.length; i++) {
        let [command, name, key, val] = arr[i].split(" ");

        resultObjFormation(command, name, key, val);
    }

}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)