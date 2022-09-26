function solve(input) {
    let arr = input.map(el => JSON.parse(el));
    let arrays = new Map();

    for(let i = 0; i < arr.length; i++) {
        arr[i].sort((a,b) => b - a);
        let currArr = arr[i].join(', ')
        if(!arrays.has(currArr)) {
            arrays.set(currArr, arr[i].length);
        }
    }

    let result = Array.from(arrays.keys()).sort((a,b) => arrays.get(a) - arrays.get(b));
    result.forEach(ar => {
        console.log(`[${ar}]`);
    });

}

// solve(["[7.14, 7.180, 7.339, 80.099]", 
// "[7.339, 80.0990, 7.140000, 7.18]", 
// "[7.339, 7.180, 7.14, 80.099]"]  )

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]", 
"[10, 1, -17, 0, 2, 13]", 
"[4, -3, 3, -2, 2, -1, 1, 0]"] )