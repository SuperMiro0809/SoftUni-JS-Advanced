function solve(input) {
    let rotations = Number(input.pop());

    // if(rotations >= input.length) {
    //     for(let i = 0; i < input.length - 1; i++) {
    //         input.unshift(input.pop())
               
    //     }
    // }else {
    //     for(let i = 0; i < rotations; i++) {
    //         input.unshift(input.pop())
               
    //     }
    // }

    for(let i = 0; i < rotations % input.length; i++) {
        input.unshift(input.pop())
       
    }

    console.log(input.join(' '))
}

// solve(['1', 
// '2', 
// '3', 
// '4', 
// '2']
// )

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'100']
)