
const express = require("express");
const { join } = require("path");
const helmet = require('helmet');
const mongoose = require('mongoose');





const app = express();
const indexRoute = require('./routes/index.routes')

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());
app.use(helmet());

app.get('/', indexRoute);

app.listen(8080);



