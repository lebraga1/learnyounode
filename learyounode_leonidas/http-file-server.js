const http = require("http");
const fs = require("fs");
const { Stream } = require("stream");

let port = process.argv[2];
let path = process.argv[3];

const server = http.createServer((req,res) => {
    let file = fs.createReadStream(path);
    file.pipe(res);
});
server.listen(port);