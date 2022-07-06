const mymodule = require("./mymodule.js");

let path = process.argv[2];
let ext = process.argv[3];

mymodule(path, ext, (err, result) => {
    if(err) return console.error(err);
    
    result.forEach(file => {
        console.log(file);
    });
});