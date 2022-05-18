
const express = require("express");
const { join } = require("path");
const helmet = require('helmet');
const mongoose = require('mongoose');





const app = express();
const indexRoute = require('./routes/index.routes')
const universityRoute = require('./routes/university.routes')
const universityAdminRoute = require('./routes/universityAdmin.routes')

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());
app.use(helmet());


app.use('/universityAdmin', universityAdminRoute);
app.use('/university', universityRoute);
app.use('/', indexRoute);

app.listen(8080);
