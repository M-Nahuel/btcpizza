const express = require('express');

const { toppings } = require('../data/menu.js').menu;

const routerToppings = express.Router();

routerToppings.use(express.json());

routerToppings.get('/', (req, res) => {
    res.json(toppings);
});

routerToppings.get('/:type', (req, res) => {
    const type = req.params.type;
    const results = toppings.filter(topp => topp.type === type);

    if (results.length === 0) {
        return res.status(400).send(`${type} topping not found.`);
    }

    if (req.query.sort === 'size') {
        return res.send(results.sort((a,b) => a.size - b.size));
    }

    res.json(results);
});

routerToppings.get('/:type/:price', (req, res) => {
    const type = req.params.type;
    const price = req.params.price;
    const results = toppings.filter(topp => topp.type === type && topp.price === price);

    if (results.length === 0) {
        return res.status(404).send(`There are no ${type} topping with a ${price} price.`);
    }

    res.json(results);
});

/////////
routerToppings.post('/', (req, res) => {
    let newTopping = req.body;
    toppings.push(newTopping);

    res.json(toppings);
});

routerToppings.put('/:id', (req, res) => {
    const modTopping = req.body;
    const id = req.params.id;

    const index = toppings.findIndex(topp => topp.id == id);

    if (index >= 0) {
        toppings[index] = modTopping;
    }

    res.json(toppings);
});

routerToppings.patch('/:id', (req, res) => {
    const modified = req.body;
    const id = req.params.id;

    const index = toppings.findIndex(topp => topp.id == id);

    if (index >= 0) {
        const toppMod = toppings[index];
        Object.assign(toppMod, modified);
    }

    res.json(toppings);
});

routerToppings.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = toppings.findIndex(topp => topp.id == id);

    if(index >= 0) {
        toppings.splice(index, 1);
    }

    res.json(toppings);
});

module.exports = routerToppings;