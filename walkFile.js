
const fs = require("fs");
const path = require("path");

/**
 * @param dirPath the root dir
 * @returns {'master':{version: '0.4.0',released: 'yes/no'}}
 */
function walkFiles(dirPath, fileObj = {}) {
  let filesList = fs.readdirSync(dirPath);
  for (let i = 0; i < filesList.length; i++) {
    let filePath = path.join(dirPath, filesList[i]);
    let stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      walkFiles(filePath, fileObj);
    } else {
      if (filesList[i] === "version.json") {
        const paths = dirPath.split("/");
        const parent = paths[paths.length - 1];
        const doc = fs.readFileSync(filePath);
        const content = JSON.parse(doc.toString());
        fileObj[parent] = content;
      }
    }
  }
  return fileObj;
}

module.exports = walkFiles;