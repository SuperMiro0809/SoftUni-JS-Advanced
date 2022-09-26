function solve(obj) {
    let engineObj = {
        Small: { power: 90, volume: 1800 },
        Normal: { power: 120, volume: 2400 },
        Monster: { power: 200, volume: 3500 }

    }

    let carriageObj = {
        Hatchback: (color) => {
            return { type: 'hatchback', color: color} 
        },
        Coupe: (color) => {
           return { type: 'coupe', color: color }
        } 
    }

    function findEngine(power) {
        if(power <= 90) {
            return engineObj.Small;
        }else if(power <= 120) {
            return engineObj.Normal;
        }else {
            return engineObj.Monster;
        }
    }

    function findCarriage(carriage, color) {
        if(carriage === 'hatchback') {
            return carriageObj.Hatchback(color);
        }else {
            return carriageObj.Coupe(color);
        }
    }

    function convertWheelSize(num) {
        if(num % 2 == 1) {
            return [num, num, num, num];
        }else {
            let d = num - 1;
            return [d, d, d, d];
        }
    }

    let resultObj = {
        model: obj.model,
        engine: findEngine(obj.power),
        carriage: findCarriage(obj.carriage, obj.color),
        wheels: convertWheelSize(obj.wheelsize)
    }

    return resultObj;
}

let res = solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

);

console.log(res)