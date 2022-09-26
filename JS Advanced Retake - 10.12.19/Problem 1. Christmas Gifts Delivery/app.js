function solution() {
    const input = document.querySelector('input[type="text"]');
    const addButton = document.querySelector('input[type="text"]').nextElementSibling;
    const listOfGifts = document.getElementsByClassName('card')[1];
    const sendSection = document.getElementsByClassName('card')[2];
    const discardSection = document.getElementsByClassName('card')[3];
    const list = listOfGifts.querySelector('ul');

    addButton.addEventListener('click', function(e) {
        const name = input.value;
        const newLi = document.createElement('LI');
        const sendButton = document.createElement('button');
        const discardButton = document.createElement('button');

        sendButton.textContent = 'Send';
        discardButton.textContent = 'Discard';
        sendButton.id = 'sendButton';
        discardButton.id = 'discardButton';
        newLi.className = 'gift';
        newLi.textContent = name;
        newLi.appendChild(sendButton);
        newLi.appendChild(discardButton);

        sendButton.addEventListener('click', onSend);
        discardButton.addEventListener('click', onDiscard);

        list.appendChild(newLi);

        const listArr = Array.from(list.querySelectorAll('li'));

        while(list.firstChild) {
            list.removeChild(list.firstChild);
         }
   
         listArr.sort(function(a,b) {
            return a.textContent.localeCompare(b.textContent);
         });
   
         listArr.forEach(li => {
            list.appendChild(li);
         })

        input.value = '';
    });

    function onSend(e) {
        let parent = e.target.parentElement;
        let buttons = Array.from(parent.querySelectorAll('button'));
        buttons.forEach(but => {
            but.remove();
        });
        let content = parent.textContent;

        const sendUl = sendSection.querySelector('ul');
        const sendLi = document.createElement('LI');
        sendLi.textContent = content;
        sendLi.className = 'gift';
        sendUl.appendChild(sendLi);
        parent.remove();
    }

    function onDiscard(e) {
        const parent = e.target.parentElement;
        let buttons = Array.from(parent.querySelectorAll('button'));
        buttons.forEach(but => {
            but.remove();
        });
        const content = parent.textContent;

        const discardUl = discardSection.querySelector('ul');
        const discardLi = document.createElement('LI');
        discardLi.textContent = content;
        discardLi.className = 'gift';
        discardUl.appendChild(discardLi);
        parent.remove();
    }
    //TO DO
}