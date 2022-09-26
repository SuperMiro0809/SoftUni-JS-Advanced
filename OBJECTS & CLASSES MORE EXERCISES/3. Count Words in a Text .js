function solve(input) {
    let resultObj = {};
    let text = input[0];

    let pattern = /[A-Za-z]+/g;

    while((validWord = pattern.exec(text)) !== null) {
        if(!resultObj.hasOwnProperty(validWord)) {
            resultObj[validWord] = 0;
        }
        resultObj[validWord] += 1;
    }

    console.log(JSON.stringify(resultObj));
}

solve(['JS devs use Node.js for server-side JS.-- JS for devs'])