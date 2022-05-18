const express = require('express');

const UniversityAdminController = require('../controllers/UniversityAdminController');
const router = express.Router();

router.get('/', (req, res, next) => {
    next()
}, (req, res) => {
    res.render("universityAdmin")
})

module.exports = router;