const fs = require("fs");

const data = fs.readFileSync("../NodejsTest1.md", { encoding: "utf-8" });
fs.writeFile("NodejsTest1.md", data, (er) => {});
