class Items {
    constructor(id, type, name, stock, price, addProp) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.stock = stock;
        this.price = price;
        Object.assign(this, addProp);
    }
};

class Menu {
    constructor() {
        this.drinks = [];
        this.toppings = [];
    }
////Drinks constructor
    addDrink(id, type, brand, flavor, stock, price, addProp = {}) {
        const drink = new Items(id, type, brand, flavor, stock, price, {
            flavor,
            ...addProp,
        });
        this.drinks.push(drink);
    };
////Toppings constructor
    addPizza(id, type, topping, stock, price, addProp = {}) {
        const pizza = new Items(id, type, topping, stock, price, addProp);
        this.toppings.push(pizza);
    };
};

const menu = new Menu();

////Add Drinks here
menu.addDrink(1, 'carbonated', 'btcdrinks', 'cola', 100, 2);
menu.addDrink(2, 'beer', 'wenbeer', 'lager', 100, 3);
menu.addDrink(3, 'water', 'wtx', 'plain', 50, 1);

////Add Toppings here
menu.addPizza(1, 'classic', 'mozzarella', 30, 8);
menu.addPizza(2, 'gourmet', 'pepperoni', 20, 15);
menu.addPizza(3, 'veggie', 'vegetables', 10, 13);

module.exports.menu = menu;