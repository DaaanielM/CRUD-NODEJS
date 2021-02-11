require('./config/config');
const colors = require('colors');
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');
const path = require('path');

const app = express();

// vista vamos a utilizar hbs
app.set('view engine', 'hbs');

// settings
// capturar datos de usuario
app.use(express.urlencoded({
    extended: false
}));

// Routes
app.use('/', require('./routes/router'));

// archivos estaticos
app.use(express.static(__dirname + '/public/'));

// generar los partials
hbs.registerPartials(__dirname + '/views/partials/')

// middlewars
app.use(morgan('dev'));


//Conexión al puerto 3000
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: '.yellow, process.env.PORT.cyan);
})
