const express = require('express');
const router = express.Router();
const patient_api = require('../../../controllers/api/v1/patient_api');
const passport = require('passport');

router.post('/register',passport.authenticate('jwt',{session:false}),patient_api.register);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patient_api.createReport);
router.post('/:id/all_reports',passport.authenticate('jwt',{session:false}),patient_api.allreports);

module.exports= router;