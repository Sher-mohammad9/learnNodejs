const model = require("../database/smsSchema.js")


function userIdentification(req, resp, next){
       model.studentModel.find({"mobile" : req.body.mobile})
        .then((student)=>{
            if(student.length === 0){
                    resp.status(400).send("Student not found given by mobile number");
                    return;
            }else if(student.length > 1){
                    res.status(400).send("More than one record found for the given student id.")
            }else if(student.length === 1){
                    next();
            }else{
                    resp.status(400).send("Invalid Id");
            }
        },(error)=>{
            console.log(error);
        })
}

module.exports = userIdentification;