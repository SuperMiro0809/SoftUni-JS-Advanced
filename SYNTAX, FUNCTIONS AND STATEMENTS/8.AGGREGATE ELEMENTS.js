function solve(input) {
    let sum = 0;
    let sum1 = 0;
    let concat = '';
    for(let i = 0; i < input.length; i++) {
        sum += input[i];
        sum1 += 1 / input[i];
        concat += String(input[i]);
    }

    console.log(sum);
    console.log(sum1.toFixed(4));
    console.log(concat);
}

solve([1,2,3]);