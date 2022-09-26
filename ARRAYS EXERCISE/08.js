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
        
        if((i % 2 == 0 && Omistake === false) || (Omistake == true && i % 2 == 1)) {
            
            if(bord[a][b] === false) {
                bord[a][b] = 'X';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0'){
                console.log(`This place is already taken. Please choose another!`);
                Xmistake = true;
            }
        }else if((i % 2 == 1 && Xmistake === false ) || (Xmistake == true && i % 2 == 0)) {
            // Xmistake = false;
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
          //  Xmistake = false;
        }else if(Omistake === true) {
            if(bord[a][b] === false) {
                bord[a][b] = 'O';
            }else if(bord[a][b] === 'X' || bord[a][b] === '0') {
                console.log(`This place is already taken. Please choose another!`);
            }
           // Omistake = false;
        } 

        if(i > 3) {
        if(Winner(bord) === true) {
            console.log(`Player ${winner} wins!`);
            break;
        }
    }
    }

    function Winner(bord) {
    for(let i = 0; i < bord.length; i++) {
        let j = i;
    
        if((bord[i][0] === "X" && bord[i][1] === "X" && bord[i][2] === "X") || 
        (bord[i - j][j] === "X" && bord[i + 1 - j][j] === "X" && bord[i + 2 - j][j] === "X") ||
        (bord[0][0] === "X" && bord[1][1] === "X" && bord[2][2] === "X") ||
        (bord[0][2] === "X" && bord[1][1] === "X" && bord[2][0] === "X")) {
            winner += 'X';
            isWinner = true;
            return true;
        }else if((bord[i][0] === "O" && bord[i][1] === "O" && bord[i][2] === "O") ||
        (bord[i - j][j] === "O" && bord[i + 1 - j][j] === "O" && bord[i + 2 - j][j] === "O") ||
        (bord[0][0] === "O" && bord[1][1] === "O" && bord[2][2] === "O") ||
        (bord[0][2] === "O" && bord[1][1] === "O" && bord[2][0] === "O")) {
            winner += 'O';
            isWinner = true;
            return true;
        }
        j++;
    }

    }

    if(isWinner === false) {
        console.log(`The game ended! Nobody wins :(`)
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

// solve(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// )

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)