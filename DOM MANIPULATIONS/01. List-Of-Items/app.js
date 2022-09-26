function addItem() {
    const ul = document.getElementById('items');
    const input= document.getElementById('newItemText');
    const inputValue = input.value;
    const newLi = document.createElement('LI');

    newLi.innerText = inputValue;
    ul.appendChild(newLi);

    input.value = '';
    console.log('TODO:...');
}