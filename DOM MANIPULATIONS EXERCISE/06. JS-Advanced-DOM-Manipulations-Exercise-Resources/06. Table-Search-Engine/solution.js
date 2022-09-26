function solve() {
   const button = document.getElementById("searchBtn");
  // const tr = Array.from(document.querySelectorAll(".container tbody tr"));
   const input = document.getElementById("searchField");

   button.addEventListener('click', Search);

   function Search() {
      const inputValue = input.value.trim().toLocaleLowerCase();

         if(inputValue.trim().length > 0) {
            const tbody = document.querySelector('tbody');

            [...tbody.querySelectorAll('tr')].forEach(r => {
               r.classList.remove('select');
            });

            [...tbody.querySelectorAll('td')].forEach(d => {
               if(d.textContent.trim().toLocaleLowerCase().includes(inputValue)) {
                  d.parentNode.classList.add('select');
               }
            }); 
         
            input.value = ''; 
      }
   }


   //TODO...
}