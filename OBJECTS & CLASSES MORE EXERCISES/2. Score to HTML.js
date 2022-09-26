function solve(input) {
    result = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    let arrObj = JSON.parse(input);

    arrObj.forEach(obj => {
        let name = replaceChar(obj.name.toString());
        let score = obj.score;
        result += `  <tr><td>${name}</td><td>${score}</td></tr>\n`;
    });

    function replaceChar(arg) {
        let res =  arg.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

        return res;
    }

    result += '</table>';
    console.log(result);
}   

solve(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'])