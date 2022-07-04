const fs = require("fs");
fs.readFile(process.argv[2], function done(err, content){
    if(err) return console.error(err);
    let lines = content.toString().split("\n").length - 1;
    console.log(lines);
});