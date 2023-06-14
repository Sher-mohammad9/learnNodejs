const fs = require("fs");

// Synchronus bihaviar
const data = fs.writeFileSync("readAndFile.js", "hello");

// Synchronus with try, catch, finally
try {
  fs.writeFileSync("readAndFilesd.js", "ok", { flag: "r+" });
} catch (er) {
  console.log(er);
} finally {
  console.log("finally is allways run");
}

// Asynchronus bihaviar
fs.writeFile("readAndFile.js", "Hiii....", (er, res) => {
  if (er) {
    throw new Error("file not found");
  } else {
    console.log(res);
  }
});

// write with promise
const fsP = require("fs/promises");
const writeProm = fsP.writeFile("writeDATA.txt", "hello", { flag: "r+" });
console.log(writeProm);
writeProm.then((data) => console.log("Sucess")).catch((er) => console.log(er));

// write with async await
const asyncWriteFn = async () => {
  const data = await fsP.writeFile("writeDATA.txt", "Hii....", { flag: "r+" });
};
asyncWriteFn();
