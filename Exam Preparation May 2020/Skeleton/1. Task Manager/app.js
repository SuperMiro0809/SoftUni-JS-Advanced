function solve() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); //маха дефалтното поведение на action при фромата
        const task = form.querySelector('#task').value;
        const textArea = form.querySelector('#description').value;
        const date = form.querySelector('#date').value;

        if (task !== '' && textArea !== '' && date !== '') {
                let OpenSection = document.getElementsByClassName('orange')[0].parentElement.parentElement;
                let newArticle = document.createElement('article');
                let articlediv = OpenSection.querySelectorAll('div')[1];
    
                let h3 = document.createElement('H3');
                h3.textContent = task;
                let pOne = document.createElement('P');
                pOne.textContent = `Description: ${textArea}`;
                let pTwo = document.createElement('P');
                pTwo.textContent = `Due Date: ${date}`;

                newArticle.appendChild(h3);
                newArticle.appendChild(pOne);
                newArticle.appendChild(pTwo);
                
                articlediv.appendChild(newArticle);

                let divButtons  = document.createElement('div');
                divButtons.className = 'flex';

                let startButton = document.createElement('button');
                let deleteButton = document.createElement('button');

                startButton.addEventListener('click', onStart)
                deleteButton.addEventListener('click', itemDelete);

                startButton.className = 'green';
                startButton.textContent = 'Start';

                deleteButton.className = 'red';
                deleteButton.textContent = 'Delete';

                divButtons.appendChild(startButton);
                divButtons.appendChild(deleteButton);
                newArticle.appendChild(divButtons);

               task.value = '';
               textArea.value = '';
               date.value = ''; 
        }
    });
        
       function onStart(e) {
            const inProgress = document.getElementById('in-progress');
            let Article = e.target.parentElement.parentElement;
            let buttonsDiv = Article.querySelectorAll('.flex button');
           
            inProgress.appendChild(Article);

            buttonsDiv[1].className = 'orange';
            buttonsDiv[1].textContent = 'Finish';
            buttonsDiv[0].className = 'red';
            buttonsDiv[0].textContent = 'Delete';

            buttonsDiv[0].addEventListener('click', itemDelete);
            buttonsDiv[1].addEventListener('click', itemFinish);
    }

    function itemDelete(e) {
        let Article = e.target.parentElement.parentElement;
        Article.remove();
    }

    function itemFinish(e) {
        let Article = e.target.parentElement.parentElement;
        let buttonDiv = Article.querySelector('.flex');
        buttonDiv.remove();

        const completeSection = document.querySelector('h1.green').parentElement.parentElement;
        let completeDiv = completeSection.querySelectorAll('div')[1];
        completeDiv.appendChild(Article);
    }
    

    console.log("//TODO")
}