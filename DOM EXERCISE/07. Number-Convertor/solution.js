function solve() {
    const input = document.getElementById("input");
    const result = document.getElementById("result");
    const menuTo = document.getElementById("selectMenuTo");
    const Binary = document.createElement('option');
    const hexadecimal = document.createElement('option');

    Binary.value = 'binary';
    hexadecimal.value = 'hexadecimal';
    Binary.innerHTML = 'Binary';
    hexadecimal.innerHTML = 'Hexadecimal';


    menuTo.appendChild(Binary);
    menuTo.appendChild(hexadecimal);

    const convertButton = document.querySelector("#container > button");

    convertButton.addEventListener('click', onClick);


    function onClick() {
        let numberInput = Number(input.value);
        if(menuTo.value === 'binary') {
            // let resultArr = [];
            // while(numberInput > 0) {
            //     let curr = numberInput % 2;
            //     resultArr.push(curr);
            //     numberInput = Math.floor(numberInput / 2);
            // }
            // resultArr = resultArr.reverse();
            // result.value = resultArr.join("");
            let binaryStr = numberInput.toString(2);
            result.value = binaryStr;
        }else if(menuTo.value === 'hexadecimal') {
            let hexStr = numberInput.toString(16);
            result.value = hexStr.toUpperCase();
        }   
    }
    //TODO...
}