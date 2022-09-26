function solve(input) {
    let noDuplicateInput = [...new Set(input)]; //масив, в който са премахти повтарящите се елементи чрез Set
    console.log(noDuplicateInput.sort((a,b) => a.length - b.length || a.localeCompare(b)).join('\n'));

}

// solve(['Ashton', 
// 'Kutcher', 
// 'Ariel', 
// 'Lilly', 
// 'Keyden', 
// 'Aizen', 
// 'Billy', 
// 'Braston'])

solve(['Denise', 
'Ignatius', 
'Iris', 
'Isacc', 
'Indie', 
'Dean', 
'Donatello', 
'Enfuego', 
'Benjamin', 
'Biser', 
'Bounty', 
'Renard', 
'Rot'] )