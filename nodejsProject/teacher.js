const fs = require("fs");
const teachers = JSON.parse(fs.readFileSync("teachers.json", {encoding : "utf-8"})); 

//GET teacher data by Id
function getTeacherById(req, resp){
    const teacherId = Number(req.params.teacherId);
    const filterTeacherData = teachers.filter(teacher => teacher.id === teacherId);
    const sendData = {
        status : "Success",
        data : {
            teachers : filterTeacherData[0]
        }
    }
    resp.status(200).json(sendData);
}

// GET all teacher data
function getAllTeacher(req, resp){
    const teachersData = {
        status : "ssuccess",
        data : {
            teachers,
        }
    }
    resp.json(teachersData)
}

// Create teacher data by id and bulk
function createTeacher(req, resp){
    const teacherData = req.body;
    if(teacherData.length > 0){
        teacherData.forEach(teacher =>{
            createResonse(teacher);
        })
        resp.send("Successfully Create bulk")
    }else{
            createResonse(teacherData)
    resp.send("Successfully Create id")
    }
    fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}


function createResonse(teacher) {
    const teacherid = teachers[teachers.length - 1].teacherid + 1;
    console.log(teacherid)
    const teacherResponse = Object.assign({ teacherid }, teacher);
    teachers.push(teacherResponse);
}

// UPDATE teacher data by Id and Bulk
function updateTeacher(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
            teachers.forEach(oldTeacher => {
                reqBody.forEach(newTeacher => {
                if(newTeacher.id === oldTeacher.teacherId){    
                updateTeachers(newTeacher, oldTeacher);
            }
            })})       
            resp.send("Successfully update") 
    }else if(reqBody.id){
            const findTeacher = teachers.filter(teacher => teacher.teacherId === reqBody.id);
            updateTeachers(reqBody, findTeacher[0]);
            resp.send("Successfully update")
    }else{
            resp.status(404).send("Not Found")
    }
      fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}

function updateTeachers(newTeacher, oldTeacher) {
    if (newTeacher.name) {
        oldTeacher.name = newTeacher.name;
    }
    if (newTeacher.mobile) {
        oldTeacher.mobile = newTeacher.mobile;
    }
    if (newTeacher.age) {
        oldTeacher.age = newTeacher.age;
    }
}

// delete student by id and bulk
function deleteTeacher(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
        teachers.forEach(oldData => {
            reqBody.forEach(delTeacher => {
                if(oldData.teacherId === delTeacher.id){
                    deleteTeachers(delTeacher);
                }
            })
        })
        resp.status(200).send("Successfully delete bulk")
    }else if(reqBody.teacherId){
        deleteTeachers(reqBody)
        resp.status(200).send("Successfully delete id")
    }else{
        resp.status(404).send("Not Found");
    }
    fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}

function deleteTeachers(delTeacher) {
    const findIndex = teachers.findIndex(teacher => teacher.id === delTeacher.id);
    teachers.splice(findIndex, 1);
}

module.exports = {
    getTeacherById,
    getAllTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher
}