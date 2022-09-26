function solve(input) {
    let result = '<table>\n';

    for(let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i]);
        result += '\t<tr>\n' + '\t\t<td>' + obj['name'] +'</td>\n' + '\t\t<td>' + obj['position'] +'</td>\n' + '\t\t<td>' + obj['salary'] +'</td>\n' + '\t</tr>\n';
    }

    console.log(result + '</table>');

    //TODO
    // " is replaced with &quot;
    // & is replaced with &amp;
    // < is replaced with &lt;
    // > is replaced with &gt;
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);