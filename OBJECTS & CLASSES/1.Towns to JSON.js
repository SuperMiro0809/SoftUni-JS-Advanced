    function solve(input) {
        let arr = []
        for(let i = 1; i < input.length; i++) {
            let [ept, name, lat, long] = input[i].split(/\s*\|\s*/); // "| "
            lat = Number(lat).toFixed(2);
            long = Number(long).toFixed(2);
            
            let obj = {
                Town: name,
                Latitude: Number(lat),
                Longitude: Number(long)
            };
            
            arr.push(obj);
        }

        console.log(JSON.stringify(arr));

    }

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);