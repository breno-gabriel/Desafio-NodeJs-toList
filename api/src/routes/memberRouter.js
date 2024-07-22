const express = require('express');
const router = express.Router();
const memberController = require('../controllers/MemberController');

router.get('/members', memberController.getAll);
router.get('/getMember/:id', memberController.getMember);
router.post('/registerMember', memberController.createMember);

module.exports = router;
