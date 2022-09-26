function solve(arr) {
    let oddArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 1) {
            oddArr.push(arr[i]);
        }
    }
    let result = '';
    for(let i = oddArr.length - 1; i >= 0; i--) {
        let num = oddArr[i] * 2;
        result += num + ' ';
    }

    console.log(result);
}

solve([10, 15, 20, 25])