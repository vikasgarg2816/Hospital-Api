const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'hospital_api'
}

passport.use(new JWTstrategy(opts,function(jwtPayload,done){

    Doctor.findById(jwtPayload._id,function(err,doctor){
        if(err){
            console.log('Error in finding user from JWT');
            return;
        }
        if(doctor){
            return done(null,doctor);
        }else{
            return done(null,false);
        }
    })    

}));

module.exports = passport;