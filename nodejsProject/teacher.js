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
        teacherData.forEach(teaData =>{
            const id = teachers[teachers.length-1].id + 1;
            const addTeaData = Object.assign({id}, teaData);
            teachers.push(addTeaData);
        })
        resp.send("Successfully Create")
    }else{
    const id = teachers[teachers.length-1].id  + 1;
    const addTeaData = Object.assign({id}, teacherData);
    teachers.push(addTeaData);
    resp.send("Successfully Create")
    }
    fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}


// UPDATE teacher data by Id and Bulk
function updateTeacher(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
            teachers.forEach(oldData => {
                reqBody.forEach(newData => {
                if(newData.id === oldData.id){    
                if(newData.name){
                    oldData.name = newData.name;
                }
                if(newData.mobile){
                    oldData.mobile = newData.mobile;
                }
                if(newData.age){
                    oldData.age = newData.age;
                }
            }
            })})       
            resp.send("Successfully update") 
    }else if(reqBody.id){
            const findIndex = teachers.findIndex(teacher => teacher.id === reqBody.id);
            if(reqBody.name){
                teachers[findIndex].name = reqBody.name
            }
            if(reqBody.mobile){
                teachers[findIndex].mobile = reqBody.mobile; 
            }
            if(reqBody.age){
                teachers[findIndex].age = reqBody.age
            }
            resp.send("Successfully update")
    }else{
            resp.status(404).send("Not Found")
    }
      fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}

// delete student by id and bulk
function deleteTeacher(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
        teachers.forEach(oldData => {
            reqBody.forEach(delData => {
                if(oldData.id === delData.id){
                  const findIndex = teachers.findIndex(teacher => teacher.id === delData.id);
                  teachers.splice(findIndex, 1);
                }
            })
        })
        resp.status(200).send("Successfully delete")
    }else if(reqBody.id){
        const findIndex = teachers.findIndex(teacher => teacher.id === reqBody.id);
        teachers.splice(findIndex, 1);
        resp.status(200).send("Successfully delete")
    }else{
        resp.status(404).send("Not Found");
    }
    fs.writeFileSync("teachers.json", JSON.stringify(teachers));
}


module.exports = {
    getTeacherById,
    getAllTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher
}