const express = require('express');

const {drinks} = require('../data/menu.js').menu;

const routerDrinks = express.Router();

routerDrinks.use(expreess.json());

routerDrinks.get('/', (req, res) => {
    res.json(drinks);
});
//// Add type
routerDrinks.get('/:type', (req, res) => {
    const type = req.params.type;
    const results = drinks.filter(drinks => drinks.type === type);

    if (results.length === 0) {
        return res.status(404).send(`${type} not found.`);
    }
/////Add size
    if (req.query.sort === 'size') {
        return res.send(results.sort((a, b) => a.size - b.size));
    }

    res.json(results);
});

routerDrinks.get('./:type/:price', (req, res) => {
    const type = req.params.type;
    const price = req.params.price;
    const results = drinks.filter(menu => menu.type === type && menu.price === price);

    if (results.length === 0) {
        return res.status(404).send(`There are no ${type} pizzas of ${price}`)
    }

    res.json(results);
});
////////
routerDrinks.post('./', (req, res) => {
    let newDrink = req.drink;
    drinks.push(newDrink);
    res.json(drink);
});

////
routerDrinks.put('/:id', (req, res) => {
    const modDrink = req.body;
    const id = req.params.id;

    const index = drinks.findIndex(drinks => drinks.id == id);

    if (index >= 0) {
        drinks[index] = modDrink;
    }

    res.json(drinks);
});

routerDrinks.patch('/:id', (req, res) => {
    const modDrink = req.body;
    const id = req.params.id;

    const index = drinks.findIndex(drinks => drinks.id == id);
});

routerDrinks.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = drinks.findIndex(drinks => drinks.id == id);

    if (index >= 0) {
        drinks.splice(index, 1);
    }

    res.json(drinks);
});

module.exports = routerDrinks;