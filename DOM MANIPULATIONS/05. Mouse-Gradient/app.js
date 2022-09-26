function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const result = document.getElementById("result");

    gradient.addEventListener('mousemove', MouseMoveFunc);
    gradient.addEventListener('mouseout', MouseOutFunc);

    function MouseMoveFunc(e) {
        let x = e.offsetX;
        let width = e.target.clientWidth;

        let power = x / width;
        power = Math.trunc(power * 100);
        result.textContent = power + '%';
    }

    function MouseOutFunc() {
        result.textContent = '';
    }
    console.log('TODO:...');
}