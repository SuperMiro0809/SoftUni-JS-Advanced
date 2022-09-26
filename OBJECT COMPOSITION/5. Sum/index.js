// //jQuery - https://www.w3schools.com/jquery/html_val.asp
// // $ е от jQuery
// //val е от jQuery

// function solve() {
//     let num1, num2, res;
//        function init(selector1, selector2, resultSelector) {
//             num1 = $(selector1);   //$ взима самия селектор
//             num2 = $(selector2);
//             res = $(resultSelector);
//         }

//         function add() {
//             res.val(Number(num1.val()) + Number(num2.val()));
//         }

//         function subtract() {
//             res.val(Number(num1.val()) - Number(num2.val()));
//         }

//     let obj = {init, add, subtract};
//     return obj;
// }

// solve();
 // obj.init("#num1","#num2",'#result');
    // let Num1 = $('#num1');
    // let Num2 = $('#num2');
    // let Res = $('#result');
    // Num1.val(5);
    // Num2.val(3);
    // obj.add();
    // expect(res.val()).to.equal('8',"Incorrect result");



    function solve() {
        let num1, num2, res;
           function init(selector1, selector2, resultSelector) {
                num1 = document.querySelector(selector1);  
                num2 = document.querySelector(selector2);
                res = document.querySelector(resultSelector);
            }
    
            function add() {
                res.value = Number(num1.value) + Number(num2.value);
            }
    
            function subtract() {
                res.value = Number(num1.value) - Number(num2.value);
            }
    
        let obj = {init, add, subtract};
        return obj;
    }