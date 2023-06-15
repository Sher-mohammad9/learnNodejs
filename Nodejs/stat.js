const fs = require("fs");
// All data about file with Asynchronus
fs.stat("Test/NodejsTest2.md", (er, stat) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log("md", stat.mtime);
});

// is file or not with Asynchronus
fs.stat("write.js", (er, stat) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log(stat.isFile());
});

// is file or directory or or not with Asynchronus
fs.stat("./others.js", (er, stat) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log(stat.isFile(), stat.isDirectory());
});

// is file or directory or symboliclink or not with Asynchronus
fs.stat("writeDATA.txt", (er, stat) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log(stat.isFile(), stat.isDirectory(), stat.isSymbolicLink());
});

// is file or directory or symboliclink and file size or not with Asynchronus
fs.stat("Nodejs.md", (er, stat) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log(
    stat.isFile(),
    stat.isDirectory(),
    stat.isSymbolicLink(),
    stat.size
  );
});

// stat with promise,async,await
const fsP = require("fs/promises");
const statFn = async () => {
  const data = await fsP.stat("readAndWrite.js");
  console.log(
    data.isFile(),
    data.isDirectory(),
    data.isSymbolicLink(),
    data.size
  );
};
statFn();
