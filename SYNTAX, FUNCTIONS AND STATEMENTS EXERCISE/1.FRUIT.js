function solve(product,weight,priceKg) {
    let kg = weight / 1000;
    let price = kg * priceKg;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${product}.`);
}

solve('orange', 2500, 1.80)