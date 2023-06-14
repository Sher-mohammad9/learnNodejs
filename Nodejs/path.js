const pt = require("path");

// Get directory name
const dirName = pt.dirname("./path.js");
console.log(dirName); // .

// Get file name
const basename = pt.basename("write.js");
console.log(basename); // write.js

// Get extname of file
const extname = pt.extname("read.js");
console.log(extname); // .js

// Get only file name
const onlyFileName = pt.basename(
  "./readAndwrite.js",
  pt.extname("./readAndwrite.js")
);
console.log(onlyFileName); // readAndwrite

// path join
const patJoin = pt.join("/Node", "other", "use.js");
console.log(patJoin); // /Node/other/use.js

// Get absolute Path of file/folder
const absolutePath = pt.resolve("stat.js");
console.log(absolutePath); // /home/hasan/Nodejs/stat.js

// add file in current folder
const addFileInCurrentFolder = pt.resolve("hello.html");
console.log(addFileInCurrentFolder); // /home/hasan/Nodejs/hello.html

// add FileIn Specific Folder
const addFileInSpecificFolder = pt.resolve("other", "hello.html");
console.log(addFileInSpecificFolder); // /home/hasan/Nodejs/other/hello.html

// यदि पहला पैरामीटर स्लैश से शुरू होता है, तो इसका मतलब है कि यह एक absolute path है:
const addfile = pt.resolve("/uses", "hello.html");
console.log(addfile); // /uses/hello.html

// Jis file/folder ke aage ../ hoga vo file/folder path se remove ho jayga.
const forwordPath = pt.normalize("/home/hasan/Nodejs/..//hello.html");
console.log(forwordPath); // /home/hasan/hello.html
