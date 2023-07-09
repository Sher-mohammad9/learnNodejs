const fs = require("fs");
const http = require("http");

const MAIN_HTML = fs.readFileSync("mainPage.html", {encoding : "utf-8"});
const HOME_HTML = fs.readFileSync("home.html", {encoding : "utf-8"});
const TEACHER_HTML = fs.readFileSync("teacher.html", {encoding : "utf-8"})
const TEACHER_HTML2 = fs.readFileSync("teacher2.html", {encoding : "utf-8"})
const STUDENT_HTML = fs.readFileSync("student.html", {encoding : "utf-8"})
const STUDENT_HTML2 = fs.readFileSync("student2.html", {encoding : "utf-8"})
const BATCH_HTML = fs.readFileSync("batchs.html", {encoding : "utf-8"})
const BATCH_HTML2 = fs.readFileSync("batchDetails.html", {encoding : "utf-8"})
const CONTANT_HTML = fs.readFileSync("contact.html", {encoding : "utf-8"})

const teacherData = JSON.parse(fs.readFileSync("teacher.txt", {encoding : "utf-8"}))
const studentData = JSON.parse(fs.readFileSync("student.txt", {encoding : "utf-8"}))
const batchData = JSON.parse(fs.readFileSync("batchData.txt", {encoding : "utf-8"}))


const TEACHER = "teacher"
const STUDENT = "student"
const BATCH = "batch"
const PORT = 3500;
const IP  = "localhost";
const SUCCESS = 200;
const NOT_FOUND = 404
const NOT_FOUND_MESSAGE  = "Not Found"
const content = "{{$CONTENT$}}";


const server = http.createServer((req, resp)=>{
    console.log(req.url)  
    const urls = req.url.split("/");
    if(req.url === "/"){
      resp.writeHead(SUCCESS);
      resp.write(MAIN_HTML)      
    }else if(urls[urls.length-1] === "home"){
      resp.writeHead(SUCCESS);
      resp.write(MAIN_HTML.replace("WecodeAcademy", HOME_HTML))
   }else if(urls.includes(TEACHER)){
      handleTeacherReq(urls, resp); 
   }else if(urls.includes(STUDENT)){
      handleStudentReq(urls, resp);
   }else if(urls.includes(BATCH)){
       sendBatchRes(urls, resp);
   }else if(urls[urls.length-1] === "contact"){
    resp.writeHead(SUCCESS);
    resp.write(MAIN_HTML.replace("WecodeAcademy", CONTANT_HTML))
   }
   resp.end();
})
server.listen(PORT, IP, ()=> console.log("server is runing"));


function handleTeacherReq(urls, resp){
    if(urls[urls.length-1] === TEACHER){
      let rows = "";
      for(let teacher of teacherData){
         let row = `<tr style=" border: 1px solid black;">
             <td style=" border: 1px solid black;">${teacher.id}</td>
             <td style=" border: 1px solid black;">${teacher.name}</td>
             <td style=" border: 1px solid black;"><button type="button"><a href="/teacher/${teacher.id}">showDetails</a></button</td>
         </tr>`;
         rows = rows.concat(row);
      }
      resp.writeHead(SUCCESS);
      resp.write(MAIN_HTML.replace("WecodeAcademy", TEACHER_HTML.replace(content, rows)));

    }else if(+urls[urls.length-1]){
        const sendTeacherDataById = teacherData.filter((teacher)=> teacher.id === +urls[urls.length-1]);
        if(sendTeacherDataById.length > 0){
         let rows = "";
         for(let teacher of sendTeacherDataById){
          let row = `<tr style=" border: 1px solid black;"> 
            <td style=" border: 1px solid black;">${teacher.id}</td>
            <td style=" border: 1px solid black;">${teacher.name}</td>
            <td style=" border: 1px solid black;">${teacher.age}</td>
            <td style=" border: 1px solid black;">${teacher.mobile}</td>
            <td style=" border: 1px solid black;">${teacher.email}</td>
            <td style=" border: 1px solid black;">${teacher.address}</td>            
          </tr>`
          rows = rows.concat(row);
         }
         resp.writeHead(SUCCESS);
         resp.write(MAIN_HTML.replace("WecodeAcademy", TEACHER_HTML2.replace(content, rows)))
        }else{
         resp.writeHead(NOT_FOUND);
         resp.write(NOT_FOUND_MESSAGE);
        }
    }else{
      resp.writeHead(NOT_FOUND);
      resp.write(NOT_FOUND_MESSAGE);      
    }
}


function handleStudentReq(urls, resp){
  if(urls[urls.length-1] === STUDENT){
    let rows = "";
    for(let student of studentData){
      let row = `<tr style=" border: 1px solid black;">
          <td style=" border: 1px solid black;">${student.id}</td>
          <td style=" border: 1px solid black;">${student.name}</td>
          <td style=" border: 1px solid black;"><button><a href="/student/${student.id}">showDetail</a></button></td>
      </tr>`
      rows = rows.concat(row);
    }
    resp.writeHead(SUCCESS);
    resp.write(MAIN_HTML.replace("WecodeAcademy", STUDENT_HTML.replace(content, rows)));
  }else if(+urls[urls.length-1]){
    const sendStudentDataById = studentData.filter((stuData)=> stuData.id === +urls[urls.length-1]);
    if(sendStudentDataById.length > 0){
      let rows = "";
      for(let student of sendStudentDataById){
        let row = `<tr style=" border: 1px solid black;">
        <th style=" border: 1px solid black;">${student.id}</th>
        <th style=" border: 1px solid black;">${student.name}</th>
        <th style=" border: 1px solid black;">${student.age}</th>
        <th style=" border: 1px solid black;">${student.mobile}</th>
        <th style=" border: 1px solid black;">${student.email}</th>
        <th style=" border: 1px solid black;">${student.address}</th>
        </tr>`
        rows = rows.concat(row);
      }
      resp.writeHead(SUCCESS);
      resp.write(MAIN_HTML.replace("WecodeAcademy", STUDENT_HTML2.replace(content, rows)))
    }else {
      resp.writeHead(NOT_FOUND);
      resp.write(NOT_FOUND_MESSAGE);    
    }
  }else {
    resp.writeHead(NOT_FOUND);
    resp.write(NOT_FOUND_MESSAGE);    
  }
}

function sendBatchRes(urls, resp){
  if(urls[urls.length-1] === "batch"){
    let rows = ""
    for(let batch of batchData){
      let row = `<tr style=" border: 1px solid black;">
        <td style=" border: 1px solid black;">${batch.id}</td>
        <td style=" border: 1px solid black;">${batch.name}</td>
        <td style=" border: 1px solid black;"><button type="button"><a href="/batch/${batch.id}">showDetails</a></button></td>
      </tr>`
      rows = rows.concat(row);
    }
    resp.writeHead(SUCCESS)
    resp.write(MAIN_HTML.replace("WecodeAcademy", BATCH_HTML.replace(content, rows)))
  }else if(+urls[urls.length-1]){
    const sendBatchData = batchData.filter((batch) => batch.id === +urls[urls.length-1])
    if(sendBatchData.length > 0){
      let rows = ""; style=" border: 1px solid black;"
      for(let batch of sendBatchData){
        let row = `<tr style=" border: 1px solid black;">
          <td style=" border: 1px solid black;">${batch.id}</td>
          <td style=" border: 1px solid black;">${batch.name}</td>
          <td style=" border: 1px solid black;">${batch.time}</td>
          <td style=" border: 1px solid black;">${batch.duration}</td>
        </tr>`
        rows = rows.concat(row);
      }
      resp.writeHead(SUCCESS)
      resp.write(MAIN_HTML.replace("WecodeAcademy", BATCH_HTML2.replace(content, rows)))
    }else{
      resp.writeHead(NOT_FOUND);
      resp.write(NOT_FOUND_MESSAGE)
    }
  }else{
    resp.writeHead(NOT_FOUND);
    resp.write(NOT_FOUND_MESSAGE)
  }
}