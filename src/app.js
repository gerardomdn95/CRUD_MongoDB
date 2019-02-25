const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connecting to DB
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});

app.use('/', indexRoutes);