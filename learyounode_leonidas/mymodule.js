const path = require("path");
const fs = require("fs");

function readDir(folder, ext, callback){
    fs.readdir(folder, (err, content) => {
        if(err) return callback(err);
        
        content = content.toString().split(",");
        let filtered = [];
        content.forEach(e => {
            let file = e.split(".");
            if(file[1] == ext) filtered.push(file[0] + "." + file[1]);
        });
        return callback(null, filtered);
    });  
}

module.exports = readDir;