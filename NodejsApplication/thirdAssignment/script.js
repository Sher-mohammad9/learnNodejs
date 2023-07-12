const fs = require("fs");
const http = require("http");
const url = require("url");


const studentData = JSON.parse(fs.readFileSync("student.txt", {encoding : "utf-8"}));

const PORT = 4000;
const IP = "localhost";

const server = http.createServer((req, resp)=>{
    const {pathname} = url.parse(req.url, true);
    const pathUrls = pathname.split("/")
    const comPath = "/"+pathUrls[pathUrls.length-2] +"/"+ pathUrls[pathUrls.length-1]
    const apiMethod = req.method;
    if(pathUrls[pathUrls.length-1] === "student" || comPath === pathname){
        handleStudentReq(req, resp);
    }
})

server.listen(PORT, IP, ()=> console.log("server is runing"));

function handleStudentReq(req, resp){
    const urls = req.url.split("/")
    const apiMethod = req.method;
    if(urls[urls.length-1] === "student" && apiMethod === "POST"){
        readStudentData(req, resp);
    }else if(+urls[urls.length-1] && apiMethod === "DELETE"){
        deleteStudentData(req, resp)
    }else if(+urls[urls.length-1] && apiMethod === "PUT"){
        updateStudentData(req, resp);
    }else if(urls.includes("student") && apiMethod === "GET"){
        sendStudentData(req, resp)
    }
}

function readStudentData(req, resp){
   let reqBody = "";

   req.on("data", (chunk)=>{
      reqBody += chunk;
   })
   
   req.on("end", (chunk)=>{
    const {id, name, mobile, email} = JSON.parse(reqBody)
    const checkStudent = studentData.filter((student) => student.id === id);
    const mobileValidation = /^[6-9]\d{9}$/;
    const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(id && name && mobileValidation.test(mobile) && emailValidation.test(email)){
        if(checkStudent.length > 0){
            resp.write("student is alraedy exsits")
            resp.end()
        }else{
            studentData.push(JSON.parse(reqBody));
            fs.writeFileSync("student.txt", JSON.stringify(studentData))
            resp.write("Register is successfull")
            resp.end()
        }
    }else{
        resp.write("Enter valid infomation")
        resp.end()
    }
   })
}

function deleteStudentData(req, resp){
    const urls = req.url.split("/");
    const studentId = +urls[urls.length-1];
    const checkStudent = studentData.filter((student) => student.id === studentId);
    const indexData = studentData.indexOf(checkStudent[0])

    if(checkStudent.length === 0){
        resp.write(`${studentId} Student not fount`);
        resp.end();
    }else{
        studentData.splice(indexData, 1);
        fs.writeFileSync("student.txt", JSON.stringify(studentData));
        resp.write(`delete this student id ${studentId}`);
        resp.end();
    }
}


function updateStudentData(req, resp){
        const urls = req.url.split("/");
        const studentId = urls[urls.length-1];
        const findStudent = studentData.filter((student)=> student.id === +studentId)
        const findIndex = studentData.indexOf(findStudent[0])
        if(findStudent.length === 0){
            resp.write(`${studentId} Student not fount`);
            resp.end();            
        }else{
            let reqBody = "";
            req.on("data", (chunk)=>{
                reqBody += chunk;
            })

            req.on("end", ()=>{
                const {name, mobile, email} = JSON.parse(reqBody);
                const mobileValidation = /^[6-9]\d{9}$/;
                const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;                
                if(name){
                    studentData[findIndex].name = name;
                }
                if(mobileValidation.test(mobile)){
                    studentData[findIndex].mobile = mobile;
                }
                if(emailValidation.test(email)){
                    studentData[findIndex].email = email;
                }
                fs.writeFileSync("student.txt", JSON.stringify(studentData));
                resp.write(`${studentId} student is update`)
                resp.end();
            })
        }
    }

function sendStudentData(req, resp){
       const urls = req.url.split("/");
       if(urls[urls.length-1] === "student"){
          resp.write(JSON.stringify(studentData));
          resp.end();
        }else if(+urls[urls.length-1]){
          const sendStudent = studentData.filter((student)=> student.id === +urls[urls.length-1]);
          if(sendStudent.length > 0){
            resp.write(JSON.stringify(sendStudent[0]));
            resp.end();                        
          }else{
            resp.write(`id ${+urls[urls.length-1]} student not found`);
            resp.end();
          }
        }else{
            resp.write(`${urls[urls.length-1]} not found`);
            resp.end();
        }
}