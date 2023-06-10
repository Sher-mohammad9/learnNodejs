const fs = require("fs");
//Read and Write Synchronus
// const data = fs.readFileSync("readAndFile.js", { encoding: "UTF-8" });
// fs.writeFileSync("others,js", data, { flage: "a+" });

fs.readFile("readAndFile.js", "utf-8", (er, da) => {
  if (er) {
    console.error("file not found");
  } else {
    fs.writeFile("others.js", da, { flag: "a+" }, (er, se) => {
      if (er) {
        console.error("not file write");
      } else {
        console.log("secusess");
      }
    });
  }
});
