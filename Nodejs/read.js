const fs = require("fs");

// Synchronus bihaviar
const data = fs.readFileSync("others.js", { encoding: "utf-8" });
console.log("Sync", data);

// Sync with try, catch, finally
try {
  const dat = fs.readFileSync("others.js", "utf-8");
  console.log("Sync with try catch", dat);
} catch (er) {
  console.log(er);
} finally {
  console.log("finally is allways run");
}

// Asynchronus bihaviar
fs.readFile("others.js", "utf-8", (er, res) => {
  if (er) {
    console.log(er.message);
  } else {
    console.log("Async", res);
  }
});

// read with promise
const fsP = require("fs/promises");
const readProm = fsP.readFile("others.js", "utf-8");
console.log("panding", readProm);
readProm.then((data) => console.log(data)).catch((er) => console.log(er));

// read with async await
const asyncReadFn = async () => {
  const data = await fsP.readFile("others.js", "utf-8");
  console.log(data);
};
asyncReadFn();
