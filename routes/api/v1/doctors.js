const express = require('express');
const router = express.Router();
const doctor_api = require('../../../controllers/api/v1/doctor_api')

router.post('/register',doctor_api.register);
router.post('/login',doctor_api.login);

module.exports = router;