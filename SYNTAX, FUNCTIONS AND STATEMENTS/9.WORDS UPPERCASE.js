function solve(input) {
    let pattern = /\w+/g;

    let words = []
    while((validWord = pattern.exec(input)) !== null) {
        words.push(validWord);
    }
    let result = [];
    for (const word of words) {
        result.push(word[0].toUpperCase());
    }
    console.log(result.join(', '))
}

solve('hello')