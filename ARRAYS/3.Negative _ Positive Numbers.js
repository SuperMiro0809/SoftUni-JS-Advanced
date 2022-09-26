function solve(arr) {
    let resultArr = [];

    arr.forEach(element => {
        if(element < 0) {
            resultArr.unshift(element);
        }else {
            resultArr.push(element);
        }
    });

    console.log(resultArr.join('\n'))

}

solve([3, -2, 0, -1])