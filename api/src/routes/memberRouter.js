const express = require('express');
const router = express.Router();
const memberController = require('../controllers/MemberController');

router.get('/members', memberController.getAll);

module.exports = router;
