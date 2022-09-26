// function solve(input) {
//     let x1 = input[0];
//     let y1 = input[1];
//     let x2 = input[2];
//     let y2 = input[3];

//     //compare {x1;y1} to {0;0}
//     let one = Math.pow(0-x1,2);
//     let two = Math.pow(0-y1,2);
//     let first = Math.sqrt(one + two);
//     if(Number.isInteger(first)) {
//         console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
//     }else {
//         console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
//     }

//     //compare {x2;y2} to {0;0}
//     let one1 = Math.pow(0-x2,2);
//     let two1 = Math.pow(0-y2,2);
//     let second = Math.sqrt(one1 + two1)
//     if(Number.isInteger(second)) {
//         console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
//     }else {
//         console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
//     }

//     //compare {x1;y1} to {x2;y2}
//     let one2 = Math.pow(x2 - x1,2);
//     let two2 = Math.pow(y2 - y1,2);
//     let third = Math.sqrt(one2 + two2);
//     if(Number.isInteger(third)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     }else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }

//  solve([2, 1, 1, 1]);

function solve([x1,y1,x2,y2]) {
    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2);
    function isValid(x1,y1,x2,y2) {
        let distX = x2 - x1;
        let distY = y2 - y1;
        const dist = Math.sqrt(distX ** 2 + distY ** 2);

        if(Number.isInteger(dist)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}
solve([2, 1, 1, 1]);
