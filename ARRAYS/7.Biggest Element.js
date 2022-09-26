function solve(matrix) {
    let arr = matrix.flat();
    let max = Math.max(...arr);
    console.log(max)
}

solve([[20, 50, 10],
    [8, 33, 145]]
   )