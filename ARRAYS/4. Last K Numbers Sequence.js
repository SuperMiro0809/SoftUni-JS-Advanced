function solve(n,k) {
    let result = '';    
    let resultArr = [1];
    let sum = 0;

    for(let i = 1; i < n; i++) {

        for(let j = 1; j <= k; j++) {
            if(i - j >= 0) {
            sum += resultArr[i - j];
            }
        }
        resultArr[i] = sum;
        sum = 0;
       
    }
    console.log(resultArr.join(' '))
}

solve(6,3)

