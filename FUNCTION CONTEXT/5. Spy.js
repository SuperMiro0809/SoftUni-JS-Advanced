function Spy(obj, fn) {
    let originalFn = obj[fn];

    let countObj = {
        count: 0
    }

    if(!originalFn) { return; }

    obj[fn] = function(...args) {
        this.count++;
        return originalFn.apply(obj, args)
    }.bind(countObj)
    
     return countObj;
}

let obj = { method: ()=>"invoked" };
let spy = Spy(obj,'method');
obj.method(); 
obj.method(); 
obj.method(); 