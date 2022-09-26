function solution(p) {
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    let products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function restock(param, q) {
        products[param] += Number(q);

        return "Success";
    }

    function prepare(recepie, q) {
        let neededProducts = recipes[recepie];
        let isCooked = true;
        for(let product in neededProducts) {
            if(products[product] - (neededProducts[product] * q) < 0) {
                let mes = `Error: not enough ${product} in stock`;
                isCooked = false
                return mes;
            }else {
                products[product] -= neededProducts[product] * q;
            }
        }
        if(isCooked === true) {
            return "Success";
        }
        
    }

    function report() {
        return `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`
    }


    function manager(str) {
        let [command, arg, quantity] = str.split(" ");
        if (command === 'restock') {
            return restock(arg, quantity);
        } else if (command === 'prepare') {
            return prepare(arg, quantity);
        } else if (command === 'report') {
            return report();
        }
    }

    return manager;
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("report")) 


