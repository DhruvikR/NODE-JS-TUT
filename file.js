const { dir } = require("console");
const fs = require("fs");
const path = require("path");
// console.log(process.argv);
// if (process.argv[2] == "Add") {
//   fs.writeFileSync(process.argv[3], process.argv[4]);
// } else if (process.argv[2] == "Remove") {
//   fs.unlinkSync(process.argv[3]);
// } else {
//   console.log("Invalid Command");
// }

//CRUD operation

const dirPath = path.join(__dirname, "Demo", "/Demo.txt");
// console.log(dirPath);

// fs.writeFileSync(`${dirPath}/Deemo.txt`, "Nice work by me...............");
fs.writeFile(dirPath, "Hello", { flag: "a" }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
  }
});

// fs.readFile(`${dirPath}/Deemo.txt`, "utf-8", (err, item) => {
//   if (!err) console.log(item);
// });

// fs.appendFile(`${dirPath}/Deemo.txt`, "Bus ab to ruk ja bhai\n", (err) => {
//   if (!err) console.log("File Updated.");
// });

// fs.rename(`${dirPath}/Deemo.txt`, `${dirPath}/Demo.txt`, (err) => {
//   if (!err) console.log("File Renamed.");
// });

// fs.unlink(`${dirPath}/Deemo.txt`, (err) => {
//   if (!err) console.log("File Deleted.");
// });
