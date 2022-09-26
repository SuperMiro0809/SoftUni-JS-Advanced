function solve(name, age, weight, height) {
    let metresHeight = height / 100;
    let BMI = Math.round(weight / (metresHeight) ** 2);
    let status = '';
    if(BMI  < 18.5) {
        status = 'underweight';
    }else if(BMI < 25) {
        status = 'normal';
    }else if(BMI  < 30) {
        status = 'overweight';
    }else if(BMI >= 30) {
        status = 'obese';
    }
    
   let result = {
       name: name,
       personalInfo: {
            age: age,
            weight: weight,
            height: height
       },
       BMI: BMI,
       status: status
   }

   if(status === 'obese') {
       result.recommendation = 'admission required';
   }

   return result;
}

let res = solve('Honey Boo Boo', 9, 57, 137);
console.log(res)