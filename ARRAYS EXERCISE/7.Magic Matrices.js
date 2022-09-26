    function solve(matrix) {

        // function FirstSum(row) {
        //     let sum = 0;
        //     for(let i = 0; i < row.length; i++) {
        //         sum += row[i];
        //     }
        //     return sum;
        // }

        let firstSum = matrix[0].reduce((a,b) => a + b, 0);
        let currSumRow = 0;
        let currSumCol = 0;
        let isTrue = true;

        for(let i = 0; i < matrix.length; i++) {
            currSumRow = matrix[i].reduce((a,b) => a + b,0);
            currSumCol = matrix.map(x => x[i]).reduce((a,b) => a + b,0);
            // for(let j = 0; j < matrix[i].length; j++) {
            //     currSumCol +=  matrix[j][i];
            // }
            if(currSumRow !== firstSum || currSumCol !== firstSum) {
                isTrue = false;
                break;
            }else {
                currSumRow = 0;
                currSumCol = 0;
            }
        }
        console.log(isTrue)
    }

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )