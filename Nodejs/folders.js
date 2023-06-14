const fs = require("fs");

// // Create folder with Synchronus
const folderN1 = "users";
try {
  fs.mkdirSync(folderN1);
  console.log("Success");
} catch (er) {
  console.log(er);
}

// // Create folder with Asynchronus
const folderN2 = "other";
if (!fs.existsSync(folderN2)) {
  fs.mkdir(folderN, (er) => {
    if (er) {
      console.log(er);
      return;
    }
    console.log("Success");
  });
} else {
  console.log("file/folder is already exists");
}

// Read folder with Synchronus
const folderN3 = "other";
const arrayOfData = fs.readdirSync(folderN3);
console.log(arrayOfData); // [ 'hello.html', 'script.js' ]

// Read folder with Asynchronus
fs.readdir(folderN3, (er, data) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log(data);
});

// // Read folder and create path with Synchronus
const pt = require("path");
const newPath = fs.readdirSync(folderN3).map((item) => {
  return pt.join(folderN3 + "/" + "heelo", item);
});
console.log(newPath); // [ 'other/heelo/hello.html', 'other/heelo/script.js' ]

// // Read folder and create path and return files with asynchronus
fs.readdir(folderN3, (er, data) => {
  if (er) {
    console.log(er);
    return;
  } else {
    let filterData = data
      .map((filename) => pt.join(folderN3, filename))
      .filter((file) => fs.lstatSync(file).isFile());
    console.log(filterData);
  }
});

// Read file and create path and file return with async, await
const fsP = require("fs/promises");
const readFn = async () => {
  const data = await fsP.readdir(folderN3);
  const returnFile = data
    .map((filename) => pt.join(folderN3, filename))
    .filter((file) => fs.lstatSync(file).isFile());
  console.log(returnFile);
};
readFn();

// // Read folder and create path and return files with Synchronus
const data = fs
  .readdirSync(folderN3)
  .map((filename) => pt.join(folderN3, filename))
  .filter((file) => fs.lstatSync(file).isFile());
console.log(data);

// // Rename file with Asynchronus
fs.rename(folderN3, "others", (er) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log("Success");
});

// // Rename file with Synchronus
try {
  fs.renameSync(folderN3, "other");
  console.log("Success");
} catch (er) {
  console.log(er);
}

// // Rename file with promis async, await
const fsP = require("fs/promises");
const renameFn = async () => {
  let da = await fsP.rename(folderN3, "users");
  console.log(da);
};
renameFn();

// Delete folder with Synchronus
try {
  fs.rmdirSync("users");
  console.log("Success");
} catch (er) {
  console.log(er);
}

// Delete folder with Asynchronus
fs.rmdir("users", (er) => {
  if (er) {
    console.log(er);
    return;
  }
  console.log("Success");
});

// Delete folder with async, await
const fsP = require("fs/promises");
const deleteFn = async () => {
  let result = await fsP.rmdir("users");
  console.log(result);
};
deleteFn();
