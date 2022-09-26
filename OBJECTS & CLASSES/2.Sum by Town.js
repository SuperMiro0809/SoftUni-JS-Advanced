function solve(input) {
    let towns = { };

    for(let i = 0; i < input.length; i++) {
        let curr = input[i];
        if(towns.hasOwnProperty(input[i])) {
            let oldV = towns[input[i]];
            let newV = Number(input[i + 1]);
            towns[input[i]] =  oldV + newV;
        }

        if(i % 2 == 0 && !towns.hasOwnProperty(input[i])) {
            towns[input[i]] = Number(input[i + 1]);
        }

        
    }

    console.log(JSON.stringify(towns))
}

solve(['Sofia','20','Varna','3','sofia','5','varna','4'])
