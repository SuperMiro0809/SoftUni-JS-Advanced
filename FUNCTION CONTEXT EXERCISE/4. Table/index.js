function solve() {
   const tbody = document.querySelector("tbody");
   const trs = Array.from(document.querySelectorAll("tbody tr"));
   
   tbody.addEventListener("click", onClick);

   function onClick(e) {
      const el = e.target;
      if(el.tagName === 'TD') {
         const parent = el.parentElement;
       
         if(parent.style.backgroundColor !== "rgb(65, 63, 94)") {
            trs.forEach(tr => {
               if(tr.style.backgroundColor === "rgb(65, 63, 94)") {
                  tr.style.backgroundColor = "";
               }
            });
            parent.style.backgroundColor = "rgb(65, 63, 94)";
         }else if(parent.style.backgroundColor === "rgb(65, 63, 94)") {
            parent.style.backgroundColor = "";
         }
         
      }
      //parent.style.backgroundColor === "rgb(65, 63, 94)" || parent.textContent === text
   }  //parent.style.backgroundColor !== "rgb(65, 63, 94)"
   // TODO
}
