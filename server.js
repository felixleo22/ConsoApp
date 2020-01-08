const express = require('express');

// Client routing
const client = require('./client');

const app = express();

app.use('/', client);

app.use('/static', express.static('public'));

app.listen(8080, () => {
    console.log('Conso App server is running !');
});
