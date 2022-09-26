function solve(steps,length,speed) {
    const dist = steps * length;
    let time = Math.round(dist / speed * 3.6);
    time += Math.floor(dist / 500) * 60;
    
    const second = time % 60;   
    time -= second;
    time /= 60;
    const minutes = time % 60;
    time -= minutes;
    time /= 60;
    const hours = time / 3600;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(second)}`);

    function pad(num) {
        return ('0' + num).slice(-2)
        // if(num < 10) {
        //     return '0' + num;
        // }else {
        //     return '' + num;
        // }
    }
}

solve(4000, 0.60, 5);