function lockedProfile() {
    const main = document.querySelector("#main");
    main.addEventListener('click', onClick);

    function onClick(e) {
        const parent = e.target.parentNode;
        if(parent.className === "profile") {
            let information = parent.children[9];
            if(e.target.tagName === 'BUTTON') {
                const lock = parent.querySelector('input[type="radio"][value="lock"]');
                if(lock.checked) {
                    return;
                }
                if(e.target.innerText === 'Hide it') {
                    information.style.display = 'none';
                    e.target.innerText = 'Show more';

                } else  { 
                    information.style.display = 'block';
                    e.target.innerText = 'Hide it';
                }
            }
    }
        console.log(e.target.parentNode)
    }
}