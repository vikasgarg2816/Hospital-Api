const mongoose = require('mongoose');
const reportSchema = mongoose.Schema({
    DoctorName:{
        type:String,
        required : true
    },

    Status:{
        type:String,
        enum : ['Negative', 'Travelled-Quarantine' , 'Symptoms-Quarantine','Positive'],
        default: 'Negative',  
        required:true
    },

    Patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        required : true
    },

    Date:{
        type:Date,
        default : Date.now
    }
},{
    timeStamps : true
});

const Report = mongoose.model('Report',reportSchema);
module.exports = Report;