const studentApi = require("./student.js")
const teacherApi = require("./teacher.js");
const express = require("express");
const app = express();

app.listen(4500, "localhost", ()=>console.log("server start"));

app.use(express.json());

app.get("/", (req, resp)=>{
   resp.send("home page");
});

// GET all student data
app.get("/api/v1/students", studentApi.getAllStudent);

// GET student data by Id
app.get("/api/v1/students/:studentId", studentApi.getStudentById)

//Create student data
app.post("/api/v1/students", studentApi.createStudent);

//UPDATE student by Id and Bulk
app.put("/api/v1/students", studentApi.updateStudent);

// DELETE student by id and Bulk
app.delete("/api/v1/students", studentApi.deleteStudent)



// GET teacher data by id
app.get("/api/v1/teachers/:teacherId", teacherApi.getTeacherById);

// GET all teacher data 
app.get("/api/v1/teachers", teacherApi.getAllTeacher)

//Create teacher data
app.post("/api/v1/teachers", teacherApi.createTeacher);

//UPDATE teacher by Id and Bulk
app.put("/api/v1/teachers", teacherApi.updateTeacher);

// DELETE teacher by id and Bulk
app.delete("/api/v1/teachers", teacherApi.deleteTeacher)


