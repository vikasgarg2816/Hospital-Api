const express = require('express');
const router = express.Router();
const reports_api = require('../../../controllers/api/v1/report_api');
const passport = require('passport');

router.post('/:status',passport.authenticate('jwt',{session:false}),reports_api);

module.exports = router;