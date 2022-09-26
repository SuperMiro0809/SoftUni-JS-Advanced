class ChristmasDinner {
    constructor(budget) {
        if(budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product,price]) {
        if(this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }else {
            this.products.push(product);
            this.budget -= price;
            return `You have successfully bought ${product}!`
        }
    }

    recipes(recipe) {
        let productsList = recipe.productsList;
        let recipeName = recipe.recipeName;
        let isTrue = true;

        productsList.forEach(pr => {
            if(!this.products.includes(pr)) {
                isTrue = false;
            }
        });

        if(isTrue) {
            this.dishes.push({recipeName, productsList});
            return `${recipeName} has been successfully cooked!`;
        }else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        let isPresent = false;

        this.dishes.forEach(dishN => {
            if(dishN.recipeName === dish) {
                isPresent = true;
            }
        });

        if(isPresent) {
            if(this.guests.hasOwnProperty(name)) {
                throw new Error('This guest has already been invited');
            }else {
                this.guests[name] = dish;
                return `You have successfully invited ${name}!`;
            }
        }else {
            throw new Error('We do not have this dish');
        }
    }

    showAttendance() {
        let result = [];

        for(let key in this.guests) {
            let dish = this.guests[key];
            let products = []
            this.dishes.forEach(d => {
                if(d.recipeName === dish) {
                    products = d.productsList;
                }
            })
            let str = `${key} will eat ${dish}, which consists of ${products.join(', ')}`;
            result.push(str);
        }

        return result.join('\n');
    }
}
let dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());



