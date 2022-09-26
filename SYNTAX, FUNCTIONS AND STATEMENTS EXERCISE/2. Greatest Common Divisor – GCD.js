function solve(num1,num2) {
     while(num2) {
         let a = num2;
         num2 = num1 % num2;
         num1 = a;
     }
     console.log(num1);
}

solve(9,72);