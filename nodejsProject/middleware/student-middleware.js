const fs = require("fs");
const students = JSON.parse(fs.readFileSync("./data/students.json", {encoding : "utf-8"}));

function userIdentification(req, res, next, studentId){
    const userId = Number(studentId);
    if(!userId){
        res.status(500).send("Invalid Id");
    }else {
        const filterData = students.filter(student => student.studentid === userId);
        if(filterData.length === 1){
            next();
        }else if (filterData.length > 1){
            res.status(400).send("More than one record found for the given student id.")
        }else{
            res.status(400).send("Student not found given by Id")
        }
    }
}

module.exports = userIdentification;