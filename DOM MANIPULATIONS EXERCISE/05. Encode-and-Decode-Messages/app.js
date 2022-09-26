function encodeAndDecodeMessages() {
    const main = document.getElementById('main');
    main.addEventListener('click', onClick);

    function onClick(e) {

        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;
            const textArea = parent.children[1];
            if (e.target.textContent === 'Encode and send it') {
                const receivedArea = parent.nextSibling.nextSibling.children[1];
                const text = textArea.value;
                let result = '';
                for(let i = 0; i < text.length; i++) {
                    let ASCII = Number(text.charCodeAt(i) + 1);
                    let ch = String.fromCharCode(ASCII);
                    result += ch;
                }
                textArea.value = '';
                receivedArea.value = result;
            }else if(e.target.textContent === 'Decode and read it') {
                const decodeValue = parent.children[1].value;
                
                let decodeResult = '';
                for(let i = 0; i < decodeValue.length; i++) {
                    let ASCII = Number(decodeValue.charCodeAt(i) - 1);
                    let ch = String.fromCharCode(ASCII);
                    decodeResult += ch;
                }
                parent.children[1].value = decodeResult;
            }

        }

    }
    console.log('TODO...')
}