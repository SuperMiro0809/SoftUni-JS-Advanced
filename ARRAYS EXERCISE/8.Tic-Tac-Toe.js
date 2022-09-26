function solve(input) {
    let bord = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let isWinner = false;
    let Xmistake = false;
    let Omistake = false;
    let winner = '';

    for(let i = 0; i < input.length; i++) {
        let [a, b] = input[i].split(' ');
        a = Number(a);
        b = Number(b);
        if(i % 2 == 0 && Xmistake == false && Omistake == false) {
            if(bord[a][b] === false) {
                bord[a][b] = 'X';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0'){
                console.log(`This place is already taken. Please choose another!`);
                Xmistake = true;
            }
        }else if(i % 2 == 1 && Omistake == false && Xmistake == false) {
            if(bord[a][b] === false) {
                bord[a][b] = 'O';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0') {
                console.log(`This place is already taken. Please choose another!`);
                Omistake = true;
            }
        }else if(Xmistake === true) {
            if(bord[a][b] === false) {
                bord[a][b] = 'X';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0'){
                console.log(`This place is already taken. Please choose another!`);
            }
            Xmistake = false;
        }else if(Omistake === true) {
            if(bord[a][b] === false) {
                bord[a][b] = 'O';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0') {
                console.log(`This place is already taken. Please choose another!`);
            }
            Omistake = false;
        } 
            Winner(bord);
            if(isWinner === true) {
                console.log(`Player ${winner} wins`);
                break;
            }
    }

    function Winner(bord) {

    for(let i = 0; i < bord.length; i++) {
        if(bord[i][0] === "X" && bord[i][1] === "X" && bord[i][0] === "X") {
            isWinner = true;
            winner += 'X';
        }
    }

    }

    bord.forEach(row => console.log(row.join("\t")))
    
    
}

// solve(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)