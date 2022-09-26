// function solve(arr) {
//     let min = Math.min(...arr);
//     let secondMin = Math.min(...arr.filter(x => x != min));
    
//     let result = '';
//     result += min + ' ';
//     result += secondMin;
//     console.log(result)
// }

//solve([3, 0, 10, 4, 7, 3])

function twoSmallest(arr) {
    let min = 0;
    let secondMin = 0;

     min = arr[0];
     secondMin = arr[1];
     if(secondMin < min) {
         min = arr[1];
         secondMin = arr[0];
     }
    for(let i = 2; i < arr.length ; i++) {
        if(min > arr[i]) {
            secondMin = min;
            min = arr[i];
        }else if(secondMin > arr[i]) {
            secondMin = arr[i]
        }
        
    }
    console.log(min, secondMin);
}

twoSmallest([3, 0, 10, 4, 7, 3])
twoSmallest([30, 15, 50, 5])