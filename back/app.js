const express = require('express');
const app = express();

const { menu } = require('./data/menu.js');

//Order Section
const routerDrinks = require('./routers/drinks');
app.use('/api/menu/drinks', routerDrinks);

const routerToppings = require('./routers/toppings');
app.use('/api/menu/toppings', routerToppings);

//Locations
const routerLocations = require('./routers/locations')
app.use('/api/locations', routerLocations);

//////
app.get('/', (req, res) => {
    res.send('Bitcoin Pizza!')/// Home
});

app.get('/api/menu', (req, res) => {
    res.send(JSON.stringify(menu));
});

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Listening at port: ${PORT}`);
// });

