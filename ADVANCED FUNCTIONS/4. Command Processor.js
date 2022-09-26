function solution() {
   let str = '';

   return {
        append: (string) => str += string,
        removeStart: (n) => str = str.replace(str.substring(0, n), ""),
        removeEnd: (n) => str = str.replace(str.substring(str.length - n, str.length), ""),
        print: () => console.log(str)
   }
    
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

