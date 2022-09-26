function deleteByEmail() {
    const input = document.querySelector("input");
    const tds = Array.from(document.querySelectorAll("#customers td:last-child")).map(td => td.innerText);
   // const tr = Array.from(document.querySelectorAll("tr")).map(tr => tr.innerText);
    const table = document.getElementById("customers");
    const result = document.getElementById("result");
    const inputValue = input.value;

    if(tds.includes(inputValue)) {
        let index = tds.indexOf(inputValue);
        let trIndex = index + 1;
        table.deleteRow(trIndex);
        result.textContent = "Deleted.";
    }else {
        result.textContent = "Not found.";
    }
    console.log('TODO:...');
}