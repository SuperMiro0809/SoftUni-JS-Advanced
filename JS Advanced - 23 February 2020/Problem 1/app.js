function solve(){
   const creator = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const form = document.querySelector('form');
   const ArticleSection = document.querySelectorAll('section')[1];
   const archieveSection = document.getElementsByClassName('archive-section')[0];

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const creatorVl = creator.value;
      const titleVl = title.value;
      const categoryVl = category.value;
      const contentVl = content.value;

      const newArticle = document.createElement('article');
      const h1 = document.createElement('H1');
      const pCategory = document.createElement('P');
      const strongCategory = document.createElement('strong');
      const strongCreator = document.createElement('strong');
      const pCreator = document.createElement('P');
      const pContent = document.createElement('P');
      const divButtons = document.createElement('div');

      h1.textContent = titleVl;
      strongCategory.textContent = categoryVl;
      pCategory.textContent = 'Category:';
      pCategory.appendChild(strongCategory);
      pCreator.textContent = 'Creator:';
      strongCreator.textContent = creatorVl;
      pCreator.appendChild(strongCreator);
      pContent.textContent = contentVl;

      newArticle.appendChild(h1);
      newArticle.appendChild(pCategory);
      newArticle.appendChild(pCreator);
      newArticle.appendChild(pContent);

      const deleteButt = document.createElement('button');
      const archieveButt = document.createElement('button');

      deleteButt.textContent = 'Delete';
      deleteButt.className = 'btn delete';
      archieveButt.textContent = 'Archive';
      archieveButt.className = 'btn archive';

      divButtons.className = 'buttons';
      divButtons.appendChild(deleteButt);
      divButtons.appendChild(archieveButt);

      deleteButt.addEventListener('click', deleteFun);
      archieveButt.addEventListener('click', archieveFun);

      newArticle.appendChild(divButtons);

      ArticleSection.appendChild(newArticle);
  });

  function deleteFun(e) {
     let deleteEl = e.target.parentElement.parentElement;
     deleteEl.remove();
  }

  function archieveFun(e) {
      let deleteEl = e.target.parentElement.parentElement;
      let h1 = deleteEl.querySelector('H1');

      const ul = archieveSection.querySelector('ul');
      const li = document.createElement('LI');
      li.textContent = h1.textContent;
      ul.appendChild(li);

      let arrayLi = Array.from(ul.querySelectorAll('li'));

      while(ul.firstChild) {
         ul.removeChild(ul.firstChild);
      }

      arrayLi.sort(function(a,b) {
         return a.textContent.localeCompare(b.textContent);
      });

      arrayLi.forEach(li => {
         ul.appendChild(li);
      })

      deleteEl.remove();
  }

   //Todo: Write your code here!
  }
