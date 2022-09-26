// function solve(input) {
//     let start = Number(input.shift());

//     for(let i = 0; i < input.length; i++) {
//         let command = input[i];
        
//         if(command === 'chop') {
//             start /= 2;
//             console.log(start);
//         }else if(command === 'dice') {
//             start = Math.sqrt(start);
//             console.log(start);
//         }else if(command === 'spice') {
//             start += 1;
//             console.log(start);
//         }else if(command === 'bake') {
//             start *= 3;
//             console.log(start);
//         }else if(command === 'fillet') {
//             start = start - 20/100 * start;
//             console.log(start);
//         }
//     }
// }

//solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

function solve(input) {
    let num = Number(input.shift());

    let commands = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - 20/100 * x
     }

     input.forEach(element => {
         let result = commands[element](num);
         console.log(result);
         num = result;
     });
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);