const fs = require("fs")
const students = JSON.parse(fs.readFileSync("data/students.json", {encoding : "utf-8"}));

// GET all student data
function getAllStudent(req, resp){
    const studentData = {
        status : "success",
        data:{
            students,
        }
    }
    resp.json(studentData)
};


// GET student data by Id
function getStudentById(req, resp){
    const studentId = Number(req.params.studentId)
    const filterStudentData = students.filter(student => student.studentid === studentId);
    const sendData = {
        status : "Success",
        data : {
            student : filterStudentData[0]
        }
    }
    resp.status(200).json(sendData);
}

// Create student data
function createStudent(req, resp){
    const studentData = req.body;
    if(studentData.length > 0){
        const studentData = req.body;
        studentData.forEach(student => {
            createRespone(student);
        });
        resp.send("Successfully Cerate")
    }else{
        createRespone(studentData)
       resp.send("Successfully Cerate")  
    }
    fs.writeFileSync("data/students.json", JSON.stringify(students));
}

function createRespone(student) {
    const studentid = students[students.length - 1].studentid + 1;
    const studentResponse = Object.assign({ studentid }, student);
    students.push(studentResponse);
}

// UPDATE student data by Id and Bulk
function updateStudent(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
            students.forEach(oldStudent => {
                reqBody.forEach(newStudent => {
                 if (newStudent.id === oldStudent.studentid) {    
                       updateStudents(newStudent, oldStudent);
                    }
            })})       
            resp.send("Successfully update") 
    }else if(reqBody.id){
            const findStudent = students.filter(student => student.studentid === reqBody.id);
            updateStudents(reqBody, findStudent[0]);
            resp.send("Successfully update")
    }else{
            resp.status(404).send("Not Found")
    }
      fs.writeFileSync("data/students.json", JSON.stringify(students));
}

function updateStudents(newStudent, oldStudent) {
        Object.assign(oldStudent, newStudent);
}

// delete student by id and bulk
function deleteStudent(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
        students.forEach(oldData => {
            reqBody.forEach(delStudent => {
                if(oldData.studentid === delStudent.id){
                  deleteStudents(delStudent);
                }
            })
        })
        resp.status(200).send("Successfully delete")
    }else if(reqBody.id){
        deleteStudents(reqBody)
        resp.status(200).send("Successfully delete")
    }else{
        resp.status(404).send("Not Found");
    }
    fs.writeFileSync("data/students.json", JSON.stringify(students));
}

function deleteStudents(delStudent) {
    const findIndex = students.findIndex(student => student.studentid === delStudent.id);
    students.splice(findIndex, 1);
}


module.exports = {
    getAllStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}