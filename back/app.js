const express = require('express');
const app = express();

const { menu } = require('./data/menu.js');
const { users } = require('./data/users.js');

//Users Section
const routerUsers = require('./routers/usersRouter.js');

//Order Section
const routerDrinks = require('./routers/drinksRouter.js');
app.use('/api/menu/drinks', routerDrinks);

const routerToppings = require('./routers/toppingsRouter.js');
app.use('/api/menu/toppings', routerToppings);

//Locations
const routerLocations = require('./routers/locationsRouter.js')
app.use('/api/locations', routerLocations);

//////
app.get('/', (req, res) => {
    res.send('Bitcoin Pizza!')/// Home
});

app.get('/api/menu', (req, res) => {
    res.send(JSON.stringify(menu));
});

app.get('/api/users', (req, res) => {
    res.send(JSON.stringify(users));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
});

