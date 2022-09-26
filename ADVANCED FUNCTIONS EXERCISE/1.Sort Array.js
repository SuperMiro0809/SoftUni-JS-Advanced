function solve(arr, str) {
    // console.log(arr.sort(sortFunc));

    // function sortFunc(a,b) {
    //     if(str === 'asc') {
    //         return a - b;
    //     }else if(str === 'desc') {
    //         return b - a;
    //     }
    // }

    return arr.sort((a,b) => {
        if(str === 'asc') {
            return a - b;
        }else if(str === 'desc') {
            return b - a;
        }
    });
}

let res = solve([14, 7, 17, 6, 8], 'asc');
console.log(res)