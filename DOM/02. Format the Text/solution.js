function solve() {
  const words = document.getElementById('input');
  let arr = words.innerHTML.split('.');
  //let p = document.createElement('p');

  let counter = 0;
  let curr = '';
  for(let i = 0; i < arr.length - 1; i++) {
    curr += arr[i].trim() + '. ';
    counter++;

    if(counter === 3) {
      counter = 0;
      curr = curr.replace(/(\r\n|\n|\r)/gm, "");
      let p = document.createElement('p');
      p.innerText = curr;
      document.getElementById('output').appendChild(p);
      curr = '';
    }
  }

  if(counter <= 2) {
    curr = curr.replace(/(\r\n|\n|\r)/gm, "");
    let p = document.createElement('p');
    p.innerText = curr.trim();
    document.getElementById('output').appendChild(p);
  }

 // p.innerText = words;


 // document.getElementById('output').appendChild(p);


  // const wordsArr = words.split('. ');

  // let counter = 0;
  // let curr = '';
  // for(let i = 0; i < wordsArr.length; i++) {
  //   curr += wordsArr[i];
  //   counter++;
  //   if(counter === 3) {
  //     document.output.appendChild(curr);
  //     counter = 0;
  //     curr = '';
  //   }
  // }
  // if(counter <= 2) {
  //   document.output.appendChild(curr);
  // }
}