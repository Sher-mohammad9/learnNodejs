const fs = require("fs");

const folderN = "user";

// try {
//   fs.mkdirSync(folderN);
//   console.log("Success");
// } catch (er) {
//   console.log(er);
// }

// Rename file with Asynchronus
// fs.rename(folderN, "users", (er) => {
//   if (er) {
//     console.log(er);
//     return;
//   }
//   console.log("Success");
// });

// Rename file with Synchronus
// try {
//   fs.renameSync("users", "user");
//   console.log("Success");
// } catch (er) {
//   console.log(er);
// }

const fsP = require("fs/promises");
const renameFn = async () => {
  let da = await fsP.rename(folderN, "users");
  console.log(da);
};
renameFn();
