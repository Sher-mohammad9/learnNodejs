const model = require("../database/smsSchema.js")


function userIdentification(req, res, next){
     model.teacherModel.find({"mobile" : req.body.mobile})
          .then((teacher)=>{
              if(teacher.length === 0){
                  res.status(404).send("Student not found given by mobile number");
              }else if(teacher.length > 1){
                  res.status(400).send("More than one record found for the given student id.")
              }else if(teacher.length === 1){
                  next()
              }else{
                  res.status(500).send("Invalid Id")
              }
          })
  }

module.exports = userIdentification;  