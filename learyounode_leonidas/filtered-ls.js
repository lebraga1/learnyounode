const fs = require("fs");
let filePath = process.argv[2];
let ext = process.argv[3];

fs.readdir(filePath, function done(err, content){
    content = content.toString().split(",");
    let filtered = [];
    content.forEach(e => {
        let file = e.split(".");
        if(file[1] == ext) filtered.push(file[0] + "." + file[1]);
    });
    filtered.forEach(e => {
        console.log(e);
    })
});