function solve(num) {
    let sum = 0;
    isTrue = true;
    let digit = num % 10;

    while(num > 0) {
        let currentDigit = num % 10;
        if(currentDigit !== digit) {
            isTrue = false;
        }
        sum += currentDigit;
        num /= 10;
        num = Math.floor(num);
        digit = currentDigit;
    }
    if(isTrue) {
        console.log(`true`);
        console.log(sum);
    }else {
        console.log(`false`);
        console.log(sum);
    }
}

solve(1234)