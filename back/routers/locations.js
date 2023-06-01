const express = require('express');

const { locations } = require('../data/locations');

const routerLocations = express.Router();

routerLocations.use(express.json());

routerLocations.get('/', (req, res) => {
    res.json(locations);
});

routerLocations.get('/location1', (req, res) => {
    res.json(locations.location1);
});

routerLocations.get('/location2', (req, res) => {
    res.json(locations.location2);
});

module.exports = routerLocations;