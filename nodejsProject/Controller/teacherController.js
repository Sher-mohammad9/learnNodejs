const model = require("../database/smsSchema.js")

//GET teacher data by mobile number
function getTeacherByMobile(req, resp){
    model.teacherModel.find({"mobile" : req.body.mobile})
      .then((teacher)=>{
          resp.status(200).send(teacher);
      }, (error)=>{
          resp.status(500).send(error.message)
      })
}

// GET all teacher data
function getAllTeacher(req, resp){
   model.teacherModel.find()
    .then((teacher)=>{
        resp.status(200).send(teacher);
    }, (error)=>{
        resp.status(500).send(error.message);
    })
}

// Create teacher data
function createTeacher(req, resp){
   const teacher = model.teacherModel(req.body)
               teacher.save()
                 .then((teacher)=>{
                    if(teacher){
                      resp.status(200).send("Create teacher");
                    }
                 }, (error)=>{
                     resp.status(500).send(error.message);
                 })
}


// UPDATE teacher data by Id and Bulk
function updateTeacher(req, resp){
     model.teacherModel.updateOne({"mobile" : req.body.mobile}, {$set : {"address" : req.body.address}})
       .then((teacher)=>{
            if(teacher){
                resp.status(200).send("Successfully update")
            }
       }, (error)=> {
               resp.status(500).send(error.message)
       })
}

// delete student by id and bulk
function deleteTeacher(req, resp){
    model.teacherModel.deleteOne({"mobile" : req.body.mobile})
      .then((teacher)=>{
         if(teacher){
            resp.status(200).send("Delete teacher");
         }
      }, (error)=> {
           resp.status(500).send(error.message);
      })
}

module.exports = {
    getTeacherByMobile,
    getAllTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher
}