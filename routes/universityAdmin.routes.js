const express = require('express');

const UniversityAdminController = require('../controllers/UniversityAdminController');
const router = express.Router();


router.get('/login', UniversityAdminController.getLoginPage);
router.post('/login', UniversityAdminController.postLogin);

/* router.get('/specifiedUniversity/:university', UniversityAdminController.getMySpecifiedUniversityPage); */ // because one account = one univ
router.get('/', UniversityAdminController.getMyUniversityPage);

module.exports = router;