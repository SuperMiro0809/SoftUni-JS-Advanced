function solve(input) {
    let result = [];

    const recPrototype = {
        area() {
            return this.height * this.width;
        },
        compareTo(otherRec) {
            const currRecArea = this.area();
            const otherRecArea = otherRec.area();
            return otherRecArea - currRecArea || otherRec.width - this.width;
        }
    }
    for(let arr of input) {
        let [width, height] = arr;
        let obj = Object.create(recPrototype);
        obj.width = width;
        obj.height = height;

        result.push(obj);
    }

   return result.sort((a,b) => b.area() - a.area() || b.width - a.width);

}

console.log(solve([[10,5],[5,12]]));

