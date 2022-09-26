function solve(arr,fn) {
    let result = [];
    for(let item of arr) {
        result.push(fn(item));
    }
    return result;
}
let arr = [1,2,3,4];
let func = (x)=>x*2;
console.log(solve(arr,func));