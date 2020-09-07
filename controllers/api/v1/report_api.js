const Report = require('../../../models/report');

module.exports = async function(req,res){

    const Status = req.params.status;

    try{

        // find the report corresponding to a particular status
        let reports = await Report.findOne({Status:Status});
        if(reports==null){
            return res.json(200,{
                message : "Reports are not available with this status"
            });
        }else{
            return res.status(200).json(reports);
        }


    }catch(err){
        console.log(err);
        return res.json(500,{
            message : "Internal Server Error"
        })
    }


}