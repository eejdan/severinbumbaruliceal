const express = require('express');
const { check } = require('express-validator');
const AdminController = require('../controllers/AdminController')

const router = express.Router();



router.get('/login', AdminController.getAdminLoginPage);
router.post('/login', AdminController.postAdminLogin);
router.post('/logout', AdminController.postAdminLogout);
router.get('/', AdminController.getAdminPage);

module.exports = router;