function solve(first,seccond,third) {
    let firstLength = first.length;
    let seccondLength = seccond.length;
    let thirdLength = third.length;

    let sumLength = firstLength + seccondLength + thirdLength;
    let averageLength = Math.round(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake')