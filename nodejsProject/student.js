const fs = require("fs")
const students = JSON.parse(fs.readFileSync("students.json", {encoding : "utf-8"}));

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
    const filterStudentData = students.filter(student => student.id === studentId);
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
        studentData.forEach(stuData => {
            const id = students[students.length-1].id + 1;
            const addStuData = Object.assign({id}, stuData);
            students.push(addStuData);
        });
        resp.send("Successfully Cerate")
    }else{
        const id = students[students.length-1].id + 1;
        const addStuData = Object.assign({id}, studentData);
        students.push(addStuData);
       fs.writeFileSync("students.json", JSON.stringify(students));
       resp.send("Successfully Cerate")  
    }
    fs.writeFileSync("students.json", JSON.stringify(students));
}

// UPDATE student data by Id and Bulk
function updateStudent(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
            students.forEach(oldData => {
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
            const findIndex = students.findIndex(student => student.id === reqBody.id);
            if(reqBody.name){
            students[findIndex].name = reqBody.name
            }
            if(reqBody.mobile){
                students[findIndex].mobile = reqBody.mobile; 
            }
            if(reqBody.age){
                students[findIndex].age = reqBody.age
            }
            resp.send("Successfully update")
    }else{
            resp.status(404).send("Not Found")
    }
      fs.writeFileSync("students.json", JSON.stringify(students));
}

// delete student by id and bulk
function deleteStudent(req, resp){
    const reqBody = req.body;
    if(reqBody.length > 0){
        students.forEach(oldData => {
            reqBody.forEach(delData => {
                if(oldData.id === delData.id){
                  const findIndex = students.findIndex(student => student.id === delData.id);
                  students.splice(findIndex, 1);
                }
            })
        })
        resp.status(200).send("Successfully delete")
    }else if(reqBody.id){
        const findIndex = students.findIndex(student => student.id === reqBody.id);
        students.splice(findIndex, 1);
        resp.status(200).send("Successfully delete")
    }else{
        resp.status(404).send("Not Found");
    }
    fs.writeFileSync("students.json", JSON.stringify(students));
}


module.exports = {
    getAllStudent,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}



