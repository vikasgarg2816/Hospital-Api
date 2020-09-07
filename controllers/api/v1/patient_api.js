const Patient = require('../../../models/patient');
const Report = require("../../../models/report");

//Register a new patient
//This is a protected route,i.e., only a logged in doctor can register a new patient
module.exports.register = async function(req,res){
    try{
        
        //check if the patient already exists using the phone number
        let patient = await Patient.findOne({phoneNo:req.body.phoneNo});
        
        //if the patient doesn't exist, register the patient
        if(!patient){
            Patient.create(req.body);
            return res.json(200,{
                message : "Patient Register Successfully"
            });
        }
        
        //if the patient already exists
        else{
            return res.json(200,{
                message : "Patient already exists"
            });
        }

    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Internal Server Error"
        });
    }
}

//create a report for a patient
//This is a protected route,i.e., only a logged in doctor can perform this task
module.exports.createReport = async function(req,res){
    let id = req.params.id;
    try{
        
        //use patient's id to check if patient is registered
        let patient = await Patient.findOne({phoneNo:id});
        if(!patient){
            return res.json(200,{
                message : "No patient exists!!"
            })
        }
        //if patient is registered ,create report
        else{
            let data = await Report.create({
                DoctorName : req.user.username,
                Status : req.body.Status,
                Patient : patient._id        
            });

            patient.report.push(data);
            console.log(patient.report)
            patient.save();
            return res.json(200,{
                message : "Report Created Successfully"
            })
        }  
    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Internal Server Error"
        })
    }
}

//get all the reports of a patient
//this route is unprotected, i.e, it can be accessed by anyone without authentication
module.exports.allreports = async function(req,res){
    const id = req.params.id;
    try{
                //use patient's phone to check if patient is registered
        let patient = await Patient.findOne({phoneNo:id});
        if(!patient){
            return res.json({
                message : "Patient doesn't exists !!"
            })
        }

        else{
            if (!patient.report || patient.report.length == 0) {
                return res.status(200).json({ "Message": "No reports yet!" });
            }
            const allreports = [];
            for(let i=0;i<patient.report.length;i++){
                let oneReport = await Report.findById(patient.report[i]);
                allreports.push({
                    "Doctor Name": oneReport.DoctorName,
                    "Status Of Covid-19": oneReport.Status,
                    "Report Created At": oneReport.Date
                });
            }
            console.log(allreports);
            return res.status(200).json(allreports);
        }

    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Internal server error"
        })
    }

}