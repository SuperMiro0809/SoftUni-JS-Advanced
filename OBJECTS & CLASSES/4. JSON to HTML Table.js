function solve(input) {
    let result = '<table>\n';

    const arr = JSON.parse(input);
    const TitleSet = new Set(arr.map(i => Object.keys(i)).flat());
    const keysArr = Array.from(TitleSet);

    result += '<tr><th>' + keysArr.join('</th><th>') + '</th></tr>';
    

    result = arr.reduce((acc,currItem) => {
        let resultNew = keysArr.reduce((titleAcc, currTitle) => {
            let value = currItem[currTitle];
            value = value === undefined ? '' : 
                value.toString().replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");

            return titleAcc + '<td>' + value + '</td>';
        }, ''); 

        if(resultNew === '') { return acc; }              //=== if else
        return acc + '\n<tr>' + resultNew + '</tr>';
    }, result);

    result = result + '\n</table>';
    console.log(result);
}

// solve([{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]);

solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')