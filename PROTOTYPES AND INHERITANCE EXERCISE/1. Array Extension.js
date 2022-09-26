(function () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let resultArr = [];

        for(let i = n; i < this.length; i++) {
            resultArr.push(this[i]);
        }

        return resultArr;
    }

    Array.prototype.take = function (n) {
        let resultArr = [];

        for(let i = 0; i < n; i++) {
            resultArr.push(this[i]);

        }

        return resultArr;
    }

    Array.prototype.sum = function () {
        let sum = 0;

        this.forEach(el => {
            sum += el;
        });

        return sum;
    }

    Array.prototype.average = function () {
        let sum = 0;
        let average = 0;

        this.forEach(el => {
            sum += el;
        });

        average = sum / this.length;
        return average;
    }

})()

let arr = [1,2,3];
console.log(arr.average());