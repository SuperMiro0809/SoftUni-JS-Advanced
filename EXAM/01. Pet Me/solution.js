function solve() {
    const divContainer = document.getElementById('container');
    const inputs = divContainer.querySelectorAll('input');
    const Addbutton = document.querySelector('button');
    const adoptionSection = document.getElementById('adoption');
    const adoptedSection = document.getElementById('adopted');

    const name = inputs[0];
    const age = inputs[1];
    const kind = inputs[2];
    const currOwner = inputs[3];

    Addbutton.addEventListener('click', function(e) {
        e.preventDefault();

        const nameValue = name.value;
        const ageValue = Number(age.value);
        const kindValue = kind.value;
        const currOwnerValue = currOwner.value;

        if(nameValue !== '' && !isNaN(ageValue) && kindValue !== '' && currOwnerValue !== '' && age.value !== '') {
            const ul = adoptionSection.querySelector('ul');
            const newLi = document.createElement('LI');

            const p = document.createElement('P');
            // const strongName = document.createElement('strong');
            // strongName.textContent = nameValue;
            // const strongAge = document.createElement('strong');
            // strongAge.textContent = ageValue;
            // const strongKind = document.createElement('strong');
            // strongKind.textContent = kindValue;
            p.innerHTML = `<strong>${nameValue}</strong> is a <strong>${ageValue}</strong> year old <strong>${kindValue}</strong>`
            newLi.appendChild(p);

            const ownerSpan = document.createElement('span');
            ownerSpan.textContent = `Owner: ${currOwnerValue}`;
            newLi.appendChild(ownerSpan);
            const contactButton = document.createElement('button');
            contactButton.textContent = 'Contact with owner';
            contactButton.addEventListener('click', onContact);
            newLi.appendChild(contactButton);

            ul.appendChild(newLi);
        }

        name.value = '';
        age.value = '';
        kind.value = '';
        currOwner.value = '';
    });

    function onContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();
        const input = document.createElement('input');
        input.placeholder = 'Enter your names';
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Yes! I take it!';
        likeButton.addEventListener('click', onAdopt);
        const div = document.createElement('div');
        div.appendChild(input)
        div.appendChild(likeButton);
        parent.appendChild(div);
    }

    function onAdopt(e) {
        const parentDiv = e.target.parentElement;
        const parent = e.target.parentElement.parentElement;
        const inputField = parentDiv.querySelector('input');
        parentDiv.remove()
        if(inputField.value !== '') {
            const ul = adoptedSection.querySelector('ul');
            const span = parent.querySelector('span');
            span.remove();
            const spanOwner = document.createElement('span');
            spanOwner.textContent = `New Owner: ${inputField.value}`;
            parent.appendChild(spanOwner);
            const button = document.createElement('button');
            button.textContent = 'Checked';
            button.addEventListener('click', onCheck);
            parent.appendChild(button);

            ul.appendChild(parent);
        }
    }

    function onCheck(e) {
        const parent = e.target.parentElement;
        parent.remove();
    }

    // TODO ...
}

