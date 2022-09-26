function solve(input) {
    let biggestNum = 0;

    for(let i = 0; i < input.length; i++) {
        if(biggestNum <= input[i]) {
            biggestNum = input[i];       //ако сме го сетнали за ново най-голямо число то трябва да го отпечатаме
        }
        if(input[i] === biggestNum) {     //ако input[i] е по голямо от миналото най-голямо число, то трябва да отпечатаме това число
            console.log(input[i])
        }
    }

}

// solve([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     );

// solve([1, 
//     2, 
//     3,
//     4]
//     );

solve([20, 
3, 
2, 
15,
6, 
1]
);


