const express = require('express');
const router = express.Router();
const {signin,login,changePassword}=require('../controller/user');

router.post("/signin",signin);
router.post('/login',login);
router.post('/changepassword',changePassword);

module.exports = router