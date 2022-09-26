function solve() {
    const button = document.getElementById("dropdown");
    const ul = document.getElementById("dropdown-ul");
    const box = document.getElementById("box");
    box.style.backgroundColor = 'black'

    button.addEventListener('click', onClick);

    function onClick(e) {
        if(ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block';
            const lis = Array.from(document.querySelectorAll("#dropdown-ul li"));
            lis.forEach(li => li.addEventListener('click', getClass));

            function getClass(e) {
                let rgbColor = e.target.textContent;
                box.style.backgroundColor = rgbColor;
                box.style.color = 'black';
            }
        }else {
            ul.style.display = 'none';
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        }

    }
    
    // ToDo
}