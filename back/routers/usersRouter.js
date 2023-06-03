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

