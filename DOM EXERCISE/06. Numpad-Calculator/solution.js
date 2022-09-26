// function solve() {

//     let operatons = {
//         '-': function(num1,num2) {return num1 - num2},
//         '+': function(num1,num2) { return num1 + num2},
//         '/': function(num1,num2) { return num1 / num2},
//         'x': function(num1,num2) { return num1 * num2}
//     }
//     // const buttons = Array.from(document.querySelectorAll(".keys > button"));
//     // const buttonsValues = buttons.map(button => button.value);
//     const field = document.getElementById("expressionOutput");
//     const resultOutput = document.getElementById("resultOutput");
//     const clear = document.getElementsByClassName("clear")[0];

//     const keys = document.getElementsByClassName("keys")[0];
//     field.textContent = '';

//     let operator = '';
//     keys.addEventListener('click', function(b) {
//         if(b.toElement.innerText === "=") {
//             let [numOne, numTwo] = field.textContent.split(operator);
//             numOne = Number(numOne);
//             numTwo = Number(numTwo);
//             if(numOne === 0 || numTwo === 0 || operator === '') {
//                 resultOutput.textContent = "NaN";
//             }else {
//                 resultOutput.textContent = operatons[operator](numOne, numTwo);
//             }
//         }else if(b.toElement.innerText === "-" || b.toElement.innerText === "+" || b.toElement.innerText === "/" || b.toElement.innerText === "x") {
//             operator = b.toElement.innerText;
//             field.textContent += b.toElement.innerText + ' ';
//         }else {
//             field.textContent += b.toElement.innerText + ' ';
//         }
        
//     });

//     clear.addEventListener('click', function() {
//         field.textContent = '';
//         resultOutput.textContent = '';
//     });


//     //.replace("↵", "")
//     //.replace(/(\r\n|\n|\r)/gm, "");
    
//     //TODO...
// }

function solve() {
    let operatons = {
                '-': function(num1,num2) {return num1 - num2},
                '+': function(num1,num2) { return num1 + num2},
                '/': function(num1,num2) { return num1 / num2},
                '*': function(num1,num2) { return num1 * num2}
    };

    [...document.querySelector('div.keys').querySelectorAll('button')].forEach(b => {
        b.addEventListener('click', onClick);
    });

    const field = document.getElementById("expressionOutput");
    const resultOutput = document.getElementById("resultOutput");
    const clear = document.getElementsByClassName("clear")[0];

    clear.addEventListener('click', Clear);

    let operator = '';
    let numOne = '';
    let numTwo = '';
    field.textContent = '';
    function onClick(e) {
        let curr = e.target.value;
        let CurrNumber = Number.parseInt(curr);
        if(Number.isNaN(CurrNumber) && curr !== '.' && curr !== '=') {
            operator = curr;
            field.textContent += ' ' + operator + ' ';
        
        }else if(curr === '=') {
            let [numOne, numTwo] = field.textContent.split(operator); 
                numOne = Number(numOne);
                numTwo = Number(numTwo);

                if(numTwo === 0) {
                    resultOutput.textContent = 'NaN';
                }else {
                     resultOutput.textContent = operatons[operator](numOne, numTwo); 
                }
                
        }else if(operator === '') {
            numOne += curr;
            field.textContent += curr;
        }else if(operator !== '') {
            numTwo += curr;
            field.textContent += curr;
        }    
    }

    function Clear() {
        numOne = '';
        numTwo = '';
        field.textContent = '';
        resultOutput.textContent = '';
    }


}