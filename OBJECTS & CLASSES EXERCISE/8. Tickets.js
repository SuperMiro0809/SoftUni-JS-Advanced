function solve(arr, sortingStr) {
    class Ticket{
        constructor(descriptor) {
            const [destinationName, price, status] = descriptor.split('|');
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }
    }

    // const comparator = {
    //     destination: (a, b) => a.destination.localeCompare(b.destination),
    //     price: (a, b) => a.price - b.price,  //a - b
    //     status: (a, b) => a.status.localeCompare(b.status)
    // }

    return arr.map(t => new Ticket(t)).sort(comparator);      //comparator[sortingStr]
    
    function comparator(a, b) {
        try{
            return a[sortingStr].localeCompare(b[sortingStr]);
        }catch (e) {
            return a[sortingStr] - b[sortingStr];
        }
    }

  
    
    // for(let line of arr) {
    //     result.push(new Ticket(line));
    // }

}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));