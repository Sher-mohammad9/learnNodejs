const studentApi = require("./student.js")
const teacherApi = require("./teacher.js");
const express = require("express");
// const morgan = require("morgan")
const app = express();

function userIdn(req, res, next){
   const {name, age} = req.body;
   if(name && age >= 18){
      next();
   }else{
      res.name = "hello"
      res.send("No allow")
   }
}
app.listen(4500, "localhost", ()=>console.log("server start"));

app.use(express.json());
// app.use(userIdn);
// app.use(morgan())

app.route("/").get((req, resp)=>{
   resp.send("home page");
})

// GET student data and create and update
app.route("/api/v1/students").get(studentApi.getAllStudent).post(studentApi.createStudent).delete(studentApi.deleteStudent).put(studentApi.updateStudent);;

// GET student data ans delete by Id
app.route("/api/v1/students/:studentId").get(studentApi.getStudentById).delete(studentApi.deleteStudent).put(studentApi.updateStudent);



// GET teacher data and create and update
app.route("/api/v1/teachers").get(teacherApi.getAllTeacher).post(teacherApi.createTeacher).put(teacherApi.updateTeacher).delete(teacherApi.deleteTeacher);

// GET teacher data and delete by id 
app.route("/api/v1/teachers/:teacherId").get(teacherApi.getTeacherById).delete(teacherApi.deleteTeacher).put(teacherApi.updateTeacher);



