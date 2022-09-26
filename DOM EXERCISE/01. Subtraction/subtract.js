function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;
    let result = document.getElementById("result");
    let resultSub = firstNum - secondNum;

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    result.textContent = resultSub;
    //console.log('TODO:...');
}