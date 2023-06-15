const fs = require("fs");

try {
  let data = fs.readFileSync("input.txt", { encoding: "utf-8" });
  data = data.toUpperCase();
  fs.writeFileSync("output.txt", data, { flag: "r+" });
  console.log(data);
} catch (er) {
  console.log(er);
}

fs.rename("output.txt", "newfile.txt", (er) => {
  if (er) {
    console.log(er);
  }
});

fs.unlink("input.txt", (er) => {
  if (er) {
    console.log(er);
  }
});

const fsP = require("fs/promises");
const miniProject = async () => {
  let data = await fsP.readFile("input.txt", { encoding: "utf-8" });
  data = data.toUpperCase();
  await fsP.writeFile("output.txt", data);
  await fsP.rename("output.txt", "newFile");
  await fs.unlink("input.txt");
};
