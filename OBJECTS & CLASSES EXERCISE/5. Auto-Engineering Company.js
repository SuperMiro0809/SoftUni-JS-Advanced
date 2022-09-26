function solve(input) {
    let list = new Map();

    for(let i = 0; i < input.length; i++) {
        let [brand, model, cars] = input[i].split(' | ');
        cars = Number(cars);

        if(!list.has(brand)) {
            list.set(brand, new Map());
        }

        if(!list.get(brand).has(model)) {
            list.get(brand).set(model, cars);
        }else {
            let oldC = list.get(brand).get(model);
            let newC = oldC + cars;
            list.get(brand).set(model, newC);
        }

    }
    for(let [brand, value] of list) {
        console.log(brand);
        for(let [model, cars] of value) {
            console.log(`###${model} -> ${cars}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);