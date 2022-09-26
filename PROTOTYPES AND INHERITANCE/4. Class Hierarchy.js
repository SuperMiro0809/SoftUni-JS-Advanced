function solve() {
    class Figure {
        constructor(units) {
            if(units === undefined) {
                this.units = 'cm';
            }else {
                this.units = units;
            }
        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        trnasformMetric(valInCm) {
            return this.units === 'm' ?
            valInCm / 100 : this.units === 'mm' ?
            valInCm * 10 : valInCm;
        }

        convertVal(param) {
            return this.trnasformMetric(param);
        }

        get area() {
            throw new Error('Not Implemented!');
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
            const radius = super.convertVal(this.radius);
            let area = Math.PI *  radius * radius;
            return area;
        }
        toString() {
            const radius = super.convertVal(this.radius);
            return `${super.toString()} - radius: ${radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }
        
        get area() {
            // const width = this.trnasformMetric(this.width);
            // const height = this.trnasformMetric(this.height);
            return super.convertVal(this.width) * super.convertVal(this.height);
        }

        toString() {
            // const width = this.trnasformMetric(this.width);
            // const height = this.trnasformMetric(this.height);
            return `${super.toString()} - width: ${super.convertVal(this.width)}, height: ${super.convertVal(this.height)}`;
        }
    }

    // let c = new Circle(5);
    // console.log(c.area); // 78.53981633974483
    // console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    // let r = new Rectangle(3, 4, 'mm');
    // console.log(r.area); // 1200 
    // console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    // r.changeUnits('cm');
    // console.log(r.area); // 12
    // console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    // c.changeUnits('mm');
    // console.log(c.area); // 7853.981633974483
    // console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

    
    return {
        Figure,
        Circle,
        Rectangle
    }

}
solve();
