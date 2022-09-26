function solve(input) {
    let sorted = input.sort(Sorting);

    function Sorting(a,b) {
        if(a.length != b.length) {
            return a.length - b.length;
        }else {
            return a.localeCompare(b);
        }
    }
    console.log(sorted.join('\n'));
}

solve(['test', 
'Deny', 
'omen', 
'Default']


)