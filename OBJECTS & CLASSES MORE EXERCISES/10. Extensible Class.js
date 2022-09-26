let result = (function solve() {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for(let prop in template) {
                if(typeof template[prop] === 'function') {
                    Extensible.prototype[prop] = template[prop];
                }else {
                    this[prop] = template[prop];
                }
            }
        }
    }

    return Extensible;

})()

// let obj1 = new result(); 

// let obj2 = new result(); 

// let obj3 = new result(); 

let obj1 = new result()
  template = { 

    extensionMethod: function () {}, 
  
    extensionProperty: 'someString' 
  
  } 

console.log(obj1.extend(template)); 

// console.log(obj2.id); 

// console.log(obj3.id); 