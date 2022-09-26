class Hex{
    constructor(value) {
        this.value = value;
    }
    

    valueOf() {
        return this.value;
    }

    toString() {
            return '0x' + this.value.toString(16).toUpperCase();
    }
    /**
     * Add to current value
     * @param {Hex} hex Hex number to add 
     */
    plus(a) {
        const newHex = new Hex(this.value);
        newHex.value += a.value;
        
        return newHex;
    }
    /**
     * Subtract from current value
     * @param {Hex} hex Hex number to subtract 
     */
    minus(a) {
        const newHex = new Hex(this.value);
         newHex.value -= a.value;

         return newHex;
    }

    static parse(str) {
        return parseInt(str, 16); // a radix of 10 converts from a decimal number, 8 converts from octal, 16 from hexadecimal, and so on.)
    }
}

let FF = new Hex(255);
let actual = FF.toString();
let expected = "0xFF";
console.log(actual)
console.log(FF.valueOf() + 1);
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();

console.log(a.plus(b).toString() === '0xF')
// console.log(act)
// console.log(FF.parse('ff'))
// let exp = "0xF";
//assert.equal(act,exp);
// let FF = new Hex(255);
// let actual = FF.toString();// "0xFF";
// let a = new Hex(10);
// let b = new Hex(5);
// let act = (a.plus(b)).toString();//"0xF";
// console.log(act)