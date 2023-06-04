const express = require('express');

const { users } = require('../data/users.js').users;

const routerUsers = express.Router();

routerUsers.use(express.json());

routerUsers.get('/', (req, res) => {
    res.json(users);
});

routerUsers.get('/customers', (req, res) => {
    res.json(users.customers);
});

routerUsers.get('/employees', (req, res) => {
    res.json(users.employees);
});

///////Add logic to verify if is a customer or an employee
routerUsers.post('/', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json(users);
});

///////
routerUsers.put('/:id', (req,res) => {
    const modUser = req.body;
    const id = req.params.id;

    const index = users.findIndex(users => users.id == id);

    if (index >= 0) {
        users[index] = modUser;
    }

    res.json(users);
});

/////
routerUsers.patch('/:id', (req, res) => {
    const modUser = req.body;
    const id = req.params.id;

    const index = users.findIndex(users => users.id == id);

    if (index >= 0) {
        Object.assign(users[index], modUser);
    }

    res.json(users);
});

////
routerUsers.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(users => users.id == id);

    if (index >= 0) {
        users.splice(index, 1);
    }

    res.json(users);
});

module.exports = routerUsers;