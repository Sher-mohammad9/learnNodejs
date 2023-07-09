const fs = require("fs");
const http = require("http");

const studentData = readStudentData();
const teacherData = readTeacherData();

const STUDENT = "student";
const TEACHER = "teacher";
const SUCCESS = 200;
const NOT_FOUND = 404;
const NOT_FOUND_MESSAGE = "Not Found"
const PORT = 3003;
const IP = "localhost";

const server = http.createServer((req, resp)=>{
    const urls = req.url.split("/");
if(urls.includes(STUDENT)){
  handleStudentsRequests(urls, resp)
  }else if(urls.includes(TEACHER)){
    handleTeacherRequests(urls, resp);
  }else{
    resp.writeHead(NOT_FOUND);
    resp.write(NOT_FOUND_MESSAGE);
  }
  resp.end();
})

server.listen(PORT, IP, ()=> {
    console.log("server is runing")
})

function handleStudentsRequests(urls, resp){
    if(urls[urls.length-1] === STUDENT){
        resp.writeHead(SUCCESS)
        resp.write(JSON.stringify(studentData))
    }else if(+urls[urls.length-1]){
        const studentDataById = studentData.filter((Studata)=> Studata.id === +urls[urls.length-1])
        if(studentDataById.length > 0){
          resp.writeHead(SUCCESS);
          resp.write(JSON.stringify(studentDataById[0]));
        }else{
          resp.writeHead(NOT_FOUND);
          resp.write(`${STUDENT} ${NOT_FOUND_MESSAGE}`);
      }
    }
}


function handleTeacherRequests(urls, resp){
  if(urls[urls.length-1] === TEACHER){
    resp.writeHead(SUCCESS);
    resp.write(JSON.stringify(teacherData));
  }else if(+urls[urls.length-1]){
    const sendTeacherDataById = teacherData.filter((tecData)=> tecData.id === +urls[urls.length-1]);
    if(sendTeacherDataById.length > 0){
      resp.write(SUCCESS);
      resp.write(JSON.stringify(sendTeacherDataById[0]));
    }else{
      resp.writeHead(NOT_FOUND)
      resp.write(NOT_FOUND_MESSAGE);
    }
  }
}


function readStudentData(){
  return JSON.parse(fs.readFileSync("./student.txt", {encoding : "utf-8"}));
}

function readTeacherData(){
  return JSON.parse(fs.readFileSync("./teacher.txt", {encoding : "utf-8"}));
}