const func = "let hello = function(a, b) {return a + b}";
let loop = "for(let i = 0; i <= 10; i++){console.log(i)}";
const data = ";hello(10,10)";
const fs = require("fs");
fs.writeFile("readAndFile.js", func, (er, da) => {
  if (er) {
    console.error("error");
  } else {
    console.log("success");
  }
});

fs.writeFile("readAndFile.js", data, (er) => {
  if (er) {
    console.error("error");
  } else {
    console.log("success");
  }
});
