const express = require('express');
const {
  login,
  getRegistersLogins,
  updatePasswordNumber
} = require('../controllers/users.js');

const router = express.Router();

router.post('/login', login);
router.post('/senha', updatePasswordNumber);
router.get('/adm', getRegistersLogins);

module.exports = router;

