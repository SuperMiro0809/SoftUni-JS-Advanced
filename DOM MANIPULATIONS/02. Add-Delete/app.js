function addItem() {
    const ul = document.getElementById('items');
    const input = document.getElementById('newText');
    const inputValue = input.value;

    const newLi = document.createElement('LI');
    newLi.innerText = inputValue;

    ul.appendChild(newLi);
    input.value = '';

    const a = document.createElement("a");
    let text = document.createTextNode("[Delete]");
    a.appendChild(text);
    a.href = "#";
    newLi.appendChild(a);

    a.addEventListener('click', Delete);
    
    function Delete() {
        newLi.remove();
    }

    //TODO...
}