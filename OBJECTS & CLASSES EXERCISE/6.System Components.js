function solve(input) {
    let system = new Map();

    for(let i = 0; i < input.length; i++) {
        let [name, comName, subComName] = input[i].split(' | ');
        
        if(system.has(name) === false) {
            system.set(name, new Map());
        }

        if(system.get(name).has(comName) === true) {
            system.get(name).get(comName).push(subComName);
        }else {
            system.get(name).set(comName, [subComName]);
        }
    }

    let sortedSystem = new Map([...system.entries()].sort(SortingFunction));
    
    function SortingFunction (a,b) {
        let aSize = a[1].size;
        let bSize = b[1].size;

        if(aSize !== bSize) {
            return bSize - aSize;
        }else {
            return a[0].localeCompare(b[0]);
        }
    }

    for(let [key, value] of sortedSystem) {
        console.log(key);
        let sortedValue = new Map([...value.entries()].sort((a,b) => b[1].length - a[1].length));

        for(let kvp of sortedValue) {
            console.log(`|||${kvp[0]}`);
            for(let el of kvp[1]) {
                console.log(`||||||${el}`);
            }
        }
    }

}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);