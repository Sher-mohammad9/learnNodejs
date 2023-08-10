const model = require("../database/smsSchema.js")

// GET student data
function getStudentData(req, resp){
      model.studentModel.find()
       .then((student)=>{
             resp.status(200).send(student);
       }, (error)=>{
             resp.status(500).send(error.message)
       })
};


// GET student data by mobile number
function getStudentByMobile(req, resp){
      model.studentModel.find({"mobile" : req.body.mobile})
    .then((student)=>{
          resp.status(200).send(student);
    }, (error)=>{
      resp.status(500).send(error.message)
    })
}

// Create student data
function createStudent(req, resp){
      const student = new model.studentModel(req.body);
      student.save().then((student)=>{
                        resp.status(200).send("Create student")
                     }, (error)=>{
                        resp.status(500).send(error.message)
                     })
               }

// UPDATE student data by mobile number
function updateStudent(req, resp){
      model.studentModel.updateOne({"mobile" : req.body.mobile}, {$set : {"class" : req.body.class}})
      .then((student)=>{
            if(student){
                resp.status(200).send("Successfully update")
            }
      }, (error)=>{
            resp.status(500).send(error.message);
  })
}


// delete student by mobile Number
function deleteStudent(req, resp){
      model.studentModel.deleteOne({"mobile" : req.body.mobile})
         .then((student)=>{
               if(student){
                   resp.status(200).send("Delete student");
               }
         }, (error)=>{
            resp.status(500).send(error.message);
         })
}

module.exports = {
    getStudentData,
    getStudentByMobile,
    createStudent,
    updateStudent,
    deleteStudent
}