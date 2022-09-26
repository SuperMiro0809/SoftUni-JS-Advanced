function focus() {
    const inputs = document.querySelectorAll("input"); // Array,from() possible

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', Click);
        inputs[i].addEventListener('blur', targetLost);
    }
   

    function Click(e) {
        e.target.parentElement.className = 'focused';
    }

    function targetLost(e) {
        e.target.parentElement.className = '';
    }
    console.log('TODO:...');
}