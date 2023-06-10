console.log();
const fs = require("fs");
const data = fs.readFileSync("others.js", { encoding: "UTF-8" });
console.log(data);
console.log("data");

fs.readFile("others.js", "utf-8", (er, da) => {
  console.log(da);
});
console.log("async");
console.log("hi.......");
console.log("hi.......");
