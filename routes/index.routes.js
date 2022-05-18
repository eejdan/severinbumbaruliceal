//const RootViewController = new (require('../controllers/RootViewController'))();




const express = require('express');


const router = express.Router();

router.get('/', (req, res, next) => {
    next()
}, (req, res) => {
    res.render("index")
})

module.exports = router;