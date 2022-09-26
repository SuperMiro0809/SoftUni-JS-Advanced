function create(words) {
   const content = document.getElementById("content")
   for(let i = 0; i < words.length; i++) {
      const newDiv = document.createElement('div');
      content.appendChild(newDiv);

      const newP = document.createElement('p');
      newP.textContent = words[i];
      newP.style.display = 'none';
      newDiv.appendChild(newP);

      newDiv.addEventListener('click', function() {
         newP.style.display = 'block';
      });
   }
   console.log('TODO:...');
}