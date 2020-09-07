const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

// Doctor Login
module.exports.login = async function(req,res){
    try{

        // check doctor exists or not
        let doctor = await Doctor.findOne({username : req.body.username});

        // if doctor doesnot exists or password is not match then return error message
        if(!doctor || doctor.password!=req.body.password){
            return res.json(422,{
                message : "Invalid Username or Password"
            });
        }

        // if password matches then send successfull msg and the corresponding token
        return res.json(200,{
            message : "Sign in Successful",
            token : jwt.sign(doctor.toJSON(),'hospital_api',{expiresIn:1000000})
        })

    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Ïnternal Server Error"
        });
    }
}

// Doctor Register
module.exports.register = async function(req,res){

    try{
        // check doctor exists oe not
        const doctor = await Doctor.findOne({username:req.body.username});
        
        // if doctor doesn't exists then create the doctor with fields as username and password
        if(!doctor){
            Doctor.create(req.body,function(err,doctor){
                if(err){
                    console.log(err);
                    return res.json(500,{
                        message : "Internal Server Error"                        
                    })
                }
                return res.json(200,{
                    message : "Doctor Registered Successfully!"
                })
            })  
        }
        
        //iff username already exists in db
        else{
            return res.json(200,{
                message : "Doctor Already exists with this username!!"
            })
        }

    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Internal Server Error" 
        });
    }
}