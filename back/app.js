const express = require('express');
const app = express();

const {menu} = require('./data/menu.js');

//////
const routerDrinks = require('./routers.drinks.js');
app.use('/api/menu/drinks');

const routerToppings = require('./routers/toppings.js');
app.use('/api/menu/toppings');

//////
app.get('/', (req, res) => {
    res.send('Bitcoin Pizza!')/// Home
});

app.get('/api/menu', (req, res) => {
    res.send(JSON.stringify(menu));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
});