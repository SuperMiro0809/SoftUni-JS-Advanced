function solve() {
    document.querySelector('button').addEventListener('click', onClick);
    const list = {};

    const items = Array.from(document.querySelector('ol').querySelectorAll('li'));
    items.forEach(el => {
        if(el.textContent.trim().length === 0) {
            return;
        }
        const letter = el.textContent[0].toLocaleUpperCase();
        list[letter] = el.textContent;
        
    });

    function onClick(e) {
        const input = document.querySelector('input');
        const inputValue = input.value[0].toUpperCase() + input.value.slice(1).toLowerCase(); //каквото и име да въведем, то ние ще го преобразъваме във формат: първа бъква главна и останалите са малки
        const letter = inputValue[0];

        if(list.hasOwnProperty(letter) == false) {
            list[letter] = inputValue;
        }else {
            list[letter] = list[letter] + ', ' + inputValue;
        }

        const index = letter.charCodeAt(0) - 65; //получаваме индекса на първата буква(A - 65; Z - 90 -> затова вадим 65)
        items[index].textContent = list[letter];

        input.value = '';
    }
    //TODO...
}