function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const extra = document.getElementById("extra");

    if(button.textContent === "More") {
        extra.setAttribute("style", `display:block;`);
        button.textContent = "Less";
    }else {
        extra.setAttribute("style", `display:none;`);
        button.textContent = "More";
    }
    console.log('TODO:...');
}
