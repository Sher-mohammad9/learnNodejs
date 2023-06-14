const fs = require("fs");

// read and write Synchronus bihaviar
const data = fs.readFileSync("others.js", { encoding: "utf-8" });
fs.writeFileSync("writeData.txt", data);

// // read and write Synchronus bihaviar with try, catch
try {
  const getData = fs.readFileSync("others.js", { encoding: "utf-8" });
  fs.writeFileSync("writeDATA.txt", getData, { flag: "r+" });
} catch (er) {
  console.log(er);
}

// read and write asynchronus bihaviar
fs.readFile("others.js", "utf-8", (er, res) => {
  if (er) {
    throw new Error(er.message);
  } else {
    fs.writeFile("writeDATA.txt", res, { flag: "a+" }, (re) => {
      if (re) {
        throw new Error("file not found");
      } else {
        console.log("Success");
      }
    });
  }
});

// read and write with promise
const fsP = require("fs/promises");
const rwProm = fsP.readFile("others.js", "utf-8");
rwProm
  .then((data) => {
    fsP.writeFile("writeDATA.txt", data, { flag: "r+" });
  })
  .catch((er) => console.log("hello", er));

// read and write async await;
const rwAsyncFn = async function () {
  const readF = await fsP.readFile("others.js", "utf-8");
  fsP.writeFile("writeDATA.txt", readF, { flag: "r+" });
};
rwAsyncFn();
