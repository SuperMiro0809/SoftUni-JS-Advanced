function solve() {
   const form = document.getElementById('add-new');
   const inputs = form.querySelectorAll('input[type="text"]');
   const availableproducts = document.getElementById('products');
   const availableUl = availableproducts.querySelector('ul');
   const addButton = form.querySelector('button');

   const filter = document.getElementsByClassName('filter')[0];
   const filterInput = document.getElementById('filter');
   const filterButton = filter.querySelector('button');

   const myProducts = document.getElementById('myProducts');
   const Buy = myProducts.querySelector('button');
   const totalPrice = document.querySelectorAll('h1')[1];

   const name = inputs[0];
   const quantity = inputs[1];
   const price = inputs[2];

   addButton.addEventListener('click', function(e) {
      e.preventDefault();

      
         const newProduct = document.createElement('LI');
         const productSpan = document.createElement('span');
         const productStrong = document.createElement('strong');
         const productDiv = document.createElement('div');
         const productDivStrong = document.createElement('strong');
         const productDivButton = document.createElement('button');

         productSpan.textContent = name.value;
         productStrong.textContent = `Available: ${quantity.value}`;
         productDivStrong.textContent = Number(price.value).toFixed(2);
         productDivButton.textContent = `Add to Client's List`;

         productDivButton.addEventListener('click', onClick);

         productDiv.appendChild(productDivStrong);
         productDiv.appendChild(productDivButton);

         newProduct.appendChild(productSpan);
         newProduct.appendChild(productStrong);
         newProduct.appendChild(productDiv);

         availableUl.appendChild(newProduct);
      
   });

   filterButton.addEventListener('click', function(e) {
      //e.preventDefault();
      const text = filterInput.value.trim().toLowerCase();
      const lis = Array.from(availableUl.querySelectorAll('li'));

      lis.forEach(li => {
         if(!li.children[0].textContent.toLowerCase().includes(text)) {  //children[0] връща името
            li.style.display = 'none';
         }else {
            li.style.display = 'block';
         }
      });
   });

   function onClick(e) {
     // e.preventDefault();
      let parent = e.target.parentElement.parentElement;
      const div = parent.querySelector('div');
      const price = div.querySelector('strong');
      const available = parent.querySelector('strong');
      let [word, q] = available.textContent.split(' ');
      q = Number(q);
      const name = parent.querySelector('span');

      const myProductsUl = myProducts.querySelector('ul');

      const newProduct = document.createElement('LI');
      newProduct.textContent = name.textContent;
      const newProductStrong = document.createElement('strong');
      newProductStrong.textContent = price.textContent;
      newProduct.appendChild(newProductStrong)

      myProductsUl.appendChild(newProduct);

      let arr = totalPrice.textContent.split(' ');
      arr[2] = Number(arr[2]);
      arr[2] += Number(price.textContent);

      totalPrice.textContent = `Total Price: ${arr[2].toFixed(2)}`

      q -= 1;
      if(q === 0) {
         parent.remove();
      }else {
         parent.querySelector('strong').textContent = `Available: ${q}`;
      }

   }

   Buy.addEventListener('click', function(e) {
     // e.preventDefault();
      const products = Array.from(myProducts.querySelectorAll('ul li'));

      products.forEach(product => {
         product.remove();
      });

      totalPrice.textContent = 'Total Price: 0.00';
   }); 

   
   //ToDO...
}

