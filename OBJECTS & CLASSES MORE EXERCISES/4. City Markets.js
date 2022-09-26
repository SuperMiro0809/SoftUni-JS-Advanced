function solve(input) {
    let towns = {}

    for(let i = 0; i < input.length; i++) {
        let [townName, product, info] = input[i].split(' -> ');
        let [amount, price] = info.split(' : ');
        amount = Number(amount);
        price = Number(price);

        let productObj = {};
        productObj[product] = amount * price;

        if(!towns.hasOwnProperty(townName)) {
            towns[townName] = [];
            towns[townName].push(productObj);
        }else {
            towns[townName].push(productObj);
        }
    }

    for(let key in towns) {
        console.log(`Town - ${key}`);

        for(let productObj of towns[key]) {
            for(let product in productObj) {
              console.log(`$$$${product} : ${productObj[product]}`);  
            } 
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000', 
'Sofia -> Raspberry -> 200000 : 1500', 
'Sofia -> Audi Q7 -> 200 : 100000', 
'Montana -> Portokals -> 200000 : 1', 
'Montana -> Qgodas -> 20000 : 0.2', 
'Montana -> Chereshas -> 1000 : 0.3'] )