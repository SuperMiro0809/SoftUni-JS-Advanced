function solve(input) {
    let string = '';

    if(input) {
        for(let i = 1; i <= input; i++) {
            string += '* ';
            for(let j = 1; j < input; j++) {
                string += '* ';
            }
            console.log(string);
            string = '';
        }
    }else {
        for(let i = 1; i <= 5; i++) {
            string += '* ';
            for(let j = 1; j < 5; j++) {
                string += '* ';
            }
            console.log(string);
            string = '';
        } 
    }
}

solve(3)