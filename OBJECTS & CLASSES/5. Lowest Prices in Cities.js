function solve(input) {
    let prices = new Map();

    for(let i = 0; i < input.length; i++) {
        let [townName, productName, price] = input[i].split(' | ');
        price = Number(price);

        if(!prices.has(productName)) {
            prices.set(productName, new Map());
        }
        prices.get(productName).set(townName, price);

    }

    for(let kvp of prices) {
        let productName = kvp[0];
        let value = kvp[1];
        let lowest = ([...value].reduce(function(a, b) {
            if(a[1] < b[1]) {
                return a;
            }else if(a[1] > b[1]){
                return b;
            }
            return a;
        }));

      console.log(`${productName} -> ${lowest[1]} (${lowest[0]})`)
    }

}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Sample Product | 1000.1',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Burger | 10']
);