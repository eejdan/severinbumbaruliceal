const express = require('express');

const UniversityController = require('../controllers/UniversityController');

const router = express.Router();


router.get('/', (req, res, next) => {
    next()
}, (req, res) => {
    res.render("index")
})

module.exports = router;