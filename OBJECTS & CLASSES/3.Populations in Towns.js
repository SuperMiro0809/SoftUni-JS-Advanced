function solve(input) {
    let towns = {};

    for(let i = 0; i < input.length; i++) {
        let [town, pop] = input[i].split(' <-> ');
        pop = Number(pop);

        if(towns.hasOwnProperty(town)) {
            let oldPop = towns[town];
            let newPop = oldPop + pop;
            towns[town] = newPop;
        }else {
            towns[town] = pop;
        }
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`)
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)