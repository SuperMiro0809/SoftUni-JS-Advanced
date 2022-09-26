function solve(input) {
    let catalog = new Map();

    for(let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(' : ');
        price = Number(price);

        if(!catalog.has(product[0])) {
            catalog.set(product[0], new Map());
        }
        catalog.get(product[0]).set(product, price);
    }

    let sortedCatalogKey = new Map([...catalog.entries()].sort());
   
    for(let [letter, items] of sortedCatalogKey) {
        console.log(letter);
        items = new Map([...items.entries()].sort());
        
        for(let kvp of items) {
            console.log(`  ${kvp[0]}: ${kvp[1]}`);
        }
    }
}

// solve(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']
// );

solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)