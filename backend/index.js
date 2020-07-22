require('./models/db');

const express = require('express');

const app = express();

var bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
var mongodb = require('mongodb');
var path = require("path");
var cors = require('cors');

app.use(cors({
    origin: 'https://localhost:8000/assignment'
}));

const userController = require('./controller/userController');

// to include form data into req parameter
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/user', userController);

// PORT
var server = app.listen(8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});