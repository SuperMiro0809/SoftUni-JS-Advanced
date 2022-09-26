function solve() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const storeProfit = document.querySelectorAll('h1')[1];

    const book = inputs[0];
    const year = inputs[1];
    const price = inputs[2];

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const bookV = book.value;
        const yearV = Number(year.value);
        const priceV = Number(price.value).toFixed(2);

        if(bookV !== '' && yearV > 0 && priceV > 0) {
            const bookshelfSection = document.getElementsByClassName('bookShelf')[1];
            const oldSection = document.getElementsByClassName('bookShelf')[0];
            const div = document.createElement('div');
            div.className = 'book';

            const p = document.createElement('p');
            p.textContent = `${bookV} [${yearV}]`;

            const buyButton = document.createElement('button');
            buyButton.textContent = `Buy it only for ${priceV} BGN`;
            buyButton.addEventListener('click', Buy);

            const moveToOld = document.createElement('button');
            moveToOld.textContent = 'Move to old section';
            moveToOld.addEventListener('click', moveOld);

            div.appendChild(p);
            div.appendChild(buyButton);
            if(yearV < 2000) {
                buyButton.textContent = `Buy it only for ${(priceV - 15/100 * priceV).toFixed(2)} BGN`;
                oldSection.appendChild(div);
            }else {
                div.appendChild(moveToOld);
                bookshelfSection.appendChild(div);
            }
            
        }
    })

    function Buy(e) {
        const parent = e.target.parentElement;
        const buyButt = parent.querySelectorAll('button')[0];
        let textArr = buyButt.textContent.split(' ');
        let price = textArr[textArr.length - 2];
        const storeProfitText = storeProfit.textContent.split(' ');
        let oldProfit = storeProfitText[storeProfitText.length - 2];
        storeProfit.textContent = `Total Store Profit: ${(Number(price) + Number(oldProfit)).toFixed(2)} BGN`;
        parent.remove();
    }

    function moveOld(e) {
        const oldSection = document.getElementsByClassName('bookShelf')[0];
        const parent = e.target.parentElement;
        const moveOldButt = parent.querySelectorAll('button')[1];
        const buyButton = parent.querySelectorAll('button')[0];

        const buyButtonText = buyButton.textContent.split(' ');
        let buyButtonPrice = Number(buyButtonText[buyButtonText.length - 2]);
        let newPrice = buyButtonPrice - 15/100 * buyButtonPrice;
        buyButton.textContent = `Buy it only for ${newPrice.toFixed(2)} BGN`


        moveOldButt.remove();
        oldSection.appendChild(parent);
    }
    //TODO...
}