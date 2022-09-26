function stopwatch() {
    const time = document.getElementById("time");
    const startButton = document.getElementById("startBtn");
    const stopButton = document.getElementById("stopBtn");

    let [min, sec] = time.textContent.split(":");
    min = Number(min);
    sec = Number(sec);

    let newTime;
    let minStr = '';
    let secStr = '';

    function formatOutput(val) {
        let text = val.toString();
        if(val >= 0 && val <= 9) {
            text = '0' + val;
        }

        return text;
    }
    
    function startButtonHandler() {
        time.textContent = "00:00";
        min = 0;
        sec = 0;
        stopButton.disabled = false;
        startButton.disabled = true;

        newTime = setInterval(
            function() {
                sec += 1;
                if(sec === 60) {
                    min += 1;
                    sec -= 60;
                }

                minStr = min.toString();
                secStr = sec.toString();
               
                time.textContent = `${formatOutput(minStr)}:${formatOutput(secStr)}`;  
              
            }, 1000 
        );
    }

    function stopButtonHandler() {
        stopButton.disabled = true;
        startButton.disabled = false;

        clearInterval(newTime);

    }

    startButton.addEventListener('click', startButtonHandler);
    stopButton.addEventListener('click', stopButtonHandler)
    console.log('TODO:...');
}