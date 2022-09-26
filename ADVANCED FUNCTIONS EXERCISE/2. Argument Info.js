function solve(...args) {
    let resObj = {};

    args.forEach(arg => {
        let type = typeof arg;

        if(resObj.hasOwnProperty(type) === false) {
            resObj[type] = 1;
        }else {
            resObj[type]++;
        }

        console.log(`${type}: ${arg}`)
    });

    let res = Object.entries(resObj);
    let sortedRes = res.sort((a,b) => b[1] - a[1]);
    for(let arg of sortedRes) {
        console.log(`${arg[0]} = ${arg[1]}`)
    }

}

solve({ name: 'bob'}, 3.333, 9.999)