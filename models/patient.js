const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({

    phoneNo:{
        type : String,
        required : true
    },

    report:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Report'
    }
    ]

},{
    timestamps : true
});

const Patient  = mongoose.model('Patient',patientSchema);

module.exports = Patient;