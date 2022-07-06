const http = require("http");
const url = require("url");

let port = process.argv[2];

const server = http.createServer((req, res) => {
    let urlS = url.parse(req.url, true);
    let endpoint = urlS.pathname;
    let date = new Date(urlS.query.iso);

    let json;
    if(endpoint == "/api/parsetime"){
        json = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    }
    if(endpoint == "/api/unixtime"){
        json = {"unixtime": date.getTime()};
    }
    res.end(JSON.stringify(json));
});
server.listen(port);