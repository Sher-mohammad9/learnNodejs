# Test 2

### 1. What is the difference between fs.writeFile() and fs.appendFile() functions in Node.js?

| fs.writeFile()                                      | fs.appendFile()                                           |
| :-------------------------------------------------- | :-------------------------------------------------------- |
| writeFile file me write karane ke liye use hota hai | appendFile file me data concat karne ke liye use hota hai |

### 2. How can you recursively create directories using the fs module?

```js
const fs = require("fs");
const pt = require("path");

const dirArr = ["users", "data", "getData", "hello.html"];
let currentfolderName = "Instagram";
for (let i = 0; i <= dirArr.length; i++) {
  try{
    fs.mkdirSync(currentfolderName);
    currentfolderName = pt.join(currentfolderName, dirArr[i]);
  } catch(er) { 
    console.log(er)
  }
}
```

### 3. Write a Node.js program to create a new directory and then create a new file within that directory

```js
const fs = require("fs");
let currentfolderName = "Exercise";
if (!fs.existsSync(currentfolderName)) {
  fs.mkdirSync(currentfolderName);
  fs.writeFile(currentfolderName + "/" + "test1.md", "Hello", (er) => {});
}
```

### 4. Write a Node.js program to check if a file exists, and if it does, display its size and last modified date

```js
const fs = require("fs");
const fileName = "test1.md";
if (fs.existsSync(fileName)) {
  fs.stat(fileName, (er, data) => {
    er ? console.log(er) : console.log(data.size, data.mtime);
  });
}
```

### 5. Write a Node.js program to list all files and directories within a given directory

```js
const fs = require("fs");
fs.readdir("Exercise", (e, data) => {
  er ? throw new Error(er) : console.log(data);
});
```

### 6. What is the difference between require() and import in Node.js?

| require()                                                  | import()                                               |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| require commandJS ka versio hai                            | import ECMAScript ka version hai                       |
| require hoistig or default import ko suppurt nhi karta hai | import hoisting or default import ko suppurt karta hai |
| require module ko dynaminc load karta hai                  | import module ko static laod karta hai                 |

### 7. Write difference between callbacks and promise?

| Callback                                              | promise                                               |
| :---------------------------------------------------- | :---------------------------------------------------- |
| callback ek function hota hai                         | promise ek constructor function hota hai              |
| callback function ko as a argument pasa kiya jata hai | promise se object bante hai                           |
| callback kab invoke hoga pata nhi hota hai            | promise ko invoke karne ke liye .then ka use hota hai |

### 8. Write a Node.js function that compares the contents of two directories and identifies any files that exist in one directory but not in the other.

```js
const fsP = require("fs/promises");
const uniqeFn = async () => {
  let uniqeFile = [];
  const dir1 = await fsP.readdir("Test");
  const dir2 = await fsP.readdir("Test1");
  dir1.forEach((file) => (dir2.includes(file) ? file : uniqeFile.push(file)));
  console.log(uniqeFile);
};
uniqeFn();
```

### 9. Question: Write a Node.js program that reads the contents of a text file, capitalizes the text, writes the modified content to a new file, prints the modified content on the console, renames the new file, and finally deletes the original file. Implement the solution using the fs module in Node.js.

```js
const fsP = require("fs/promises");
const miniProject = async () => {
  let data = await fsP.readFile("input.txt", { encoding: "utf-8" });
  data = data.toUpperCase();
  await fsP.writeFile("output.txt", data);
  await fsP.rename("output.txt", "newFile");
  await fsP.unlink("input.txt");
};
```

### 10. Print the last modified date of each file in a folder.

```js
const fsP = require("fs/promises");
const lastUpdateFile = async (foldeName) => {
  const arrofFile = await fsP.readdir(foldeName);
  arrofFile.forEach((file) => {
    let d = fs.statSync(foldeName + file);
    console.log(d.mtime);
  });
};
lastUpdateFile("Test/");
```
