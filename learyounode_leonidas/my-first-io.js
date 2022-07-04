const fs = require("fs");

let filePath = process.argv[2];
let content = fs.readFileSync(filePath);
content = content.toString();
let lines = content.split("\n");
console.log(lines.length-1);