function getFibunator() {
    let current = 0;
    let next = 1;

    function fibunator() {
        let newNum = current + next;
        current = next;
        next = newNum;

        return current;
    }
    
    return fibunator;
}

let fib = getFibunator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
