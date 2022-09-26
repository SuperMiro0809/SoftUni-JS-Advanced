function attachEventsListeners() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const min = document.getElementById("minutes");
    const sec = document.getElementById("seconds");

    const daysButton = document.getElementById("daysBtn");
    const hoursButton = document.getElementById("hoursBtn");
    const minButton = document.getElementById("minutesBtn");
    const secButton = document.getElementById("secondsBtn");

    daysButton.addEventListener('click', function() {
        const value = days.value || hours.value / 24 || min.value / 1440 || sec.value / 8640;
        
        days.value = value;
        hours.value = value * 24;
        min.value = hours.value * 60;
        sec.value = min.value * 60;
    });

    hoursButton.addEventListener('click', function() {
        const value = hours.value || days.value * 24 || min.value / 60 || sec.value / 3600;
        
        hours.value = value;
        days.value = value / 24;
        min.value = value * 60;
        sec.value = min.value * 60;
    });

    minButton.addEventListener('click', function() {
        const value = min.value || days.value * 1440 || hours.value * 60 || sec.value / 60;

        min.value = value;
        hours.value = value / 60;
        days.value = hours.value / 24;
        sec.value = value * 60;
    });

    secButton.addEventListener('click', function() {
        const value = sec.value || days.value * 86400 || hours.value * 3600 || min.value * 60;

        sec.value = value;
        hours.value = value / 3600;
        min.value = value / 60;
        days.value =  hours.value / 24;
    });
    console.log('TODO:...');
}