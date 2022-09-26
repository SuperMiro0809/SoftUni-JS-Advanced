function notify(message) {
    const notificationDiv = document.getElementById("notification");
    const button = document.querySelector("button");

    notificationDiv.textContent = message;

    notificationDiv.style.display = 'block';

    setTimeout(function () {
        notificationDiv.style.display = 'none';
    }, 2000
    );

    console.log('TODO:...');
}