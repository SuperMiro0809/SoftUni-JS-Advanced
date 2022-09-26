function solve(input) {
    let startNum = 1;
    const arr = []

    input.forEach(command => {
        if(command == 'add') {
            arr.push(startNum);
            startNum++;
         }else if(command == 'remove') {
             arr.pop();
             startNum++;
         } 
    });

    if(arr.length > 0) {
        console.log(arr.join('\n'));
    }else {
        console.log(`Empty`)
    }

}

solve(['remove', 
'remove', 
'remove']


)
