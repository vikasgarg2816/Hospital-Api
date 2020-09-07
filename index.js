const express = require('express');
const port = 8005;

const app = express();
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded({extended:true}));

app.use('/', require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log("Error",err);
        return;
    }
    console.log("Server is running on port no",port);
})