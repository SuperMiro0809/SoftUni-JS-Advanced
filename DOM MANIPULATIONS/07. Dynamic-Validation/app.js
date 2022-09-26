function validate() {
    const input = document.getElementById("email");

    input.addEventListener('change', function() {
        input.className = '';
        const value = input.value;
        if(!value.match(/[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/))  {
            input.className = 'error';
        }
    })
    console.log('TODO:...');
}