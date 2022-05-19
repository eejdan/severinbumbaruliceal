if(require.main === module) {
    require('dotenv').config();
}

const { join } = require("path");

const express = require("express");

var session = require('express-session')
const helmet = require('helmet');

const mongoose = require('mongoose');
//TODO mongoose.connect

const MetaController = require('./controllers/MetaController');


const app = express();
const indexRoute = require('./routes/index.routes')
// const universityRoute = require('./routes/university.routes')
// const universityAdminRoute = require('./routes/universityAdmin.routes')
const adminRoute = require('./routes/admin.routes')

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));


app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: (10 * 24 * 60 * 60 * 1000) }
}))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/admin', adminRoute)


// app.use('/universityAdmin', universityAdminRoute);
// app.use('/university', universityRoute);


app.get('/AboutUs', MetaController.getAboutUs);
app.get('/ContactUs', MetaController.getContactUs);

app.get('/',)
app.use('/', indexRoute);

app.listen(8080);

async function init() {
    await mongoose.connect('mongodb+srv://'
        +process.env.MONGO_USERNAME
        +':'+process.env.MONGO_PASSWORD
        +'@'+process.env.MONGO_URL, {
            dbName: 'plecLaFacultate',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}
init();