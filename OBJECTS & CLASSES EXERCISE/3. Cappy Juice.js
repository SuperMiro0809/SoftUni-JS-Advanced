function solve(input) {
    let mlObj = {};
    let bottleObj = {};

    for(let i = 0; i < input.length; i++) {
        let [name, quantity] = input[i].split(' => ');
        quantity = Number(quantity);

        if(!mlObj.hasOwnProperty(name)) {
            mlObj[name] = quantity;
        }else {
            let oldQ = mlObj[name];
            mlObj[name] = oldQ + quantity;
        }
        for (const key in mlObj) {
            if(mlObj[key] >= 1000) {
                let bottles = Math.floor(mlObj[key] / 1000);
                bottleObj[key] = bottles;
            }
        }
    }

    for(const key in bottleObj) {
        console.log(`${key} => ${bottleObj[key]}`);
    }
    
}

// solve(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// );

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)