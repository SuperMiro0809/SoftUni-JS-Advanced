function solve(input) {
    let speed = input[0];
    let area = input[1];
    let difference = 0;

    switch(area) {
        case 'motorway':
            difference = Math.abs(130 - speed);
            if(speed > 130) {
                if(difference <= 20) {
                    console.log(`speeding`);
                }else if(difference <= 40) {
                    console.log(`excessive speeding`);
                }else {
                    console.log(`reckless driving`);
                }
            }
            difference = 0;
            break;  
            case 'interstate':
            difference = Math.abs(90 - speed);
            if(speed > 90) {
                if(difference <= 20) {
                    console.log(`speeding`);
                }else if(difference <= 40) {
                    console.log(`excessive speeding`);
                }else {
                    console.log(`reckless driving`);
                }
            }
            difference = 0;
            break; 
            case 'city':
            difference = Math.abs(50 - speed);
            if(speed > 50) {
                if(difference <= 20) {
                    console.log(`speeding`);
                }else if(difference <= 40) {
                    console.log(`excessive speeding`);
                }else {
                    console.log(`reckless driving`);
                }
            }
            difference = 0;
            break; 
            case 'residential':
            difference = Math.abs(20 - speed);
            if(speed > 20) {
                if(difference <= 20) {
                    console.log(`speeding`);
                }else if(difference <= 40) {
                    console.log(`excessive speeding`);
                }else {
                    console.log(`reckless driving`);
                }
            }
            difference = 0;
            break;  

    }
}

solve([200, 'motorway']);