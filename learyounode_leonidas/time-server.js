const net = require("net");

let port = process.argv[2];

const server = net.createServer(socket => {
    date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month<10)month = "0" + month;
    let day = date.getDate();
    if(day<10)day = "0" + day;
    let hour = date.getHours();
    if(hour<10)gour = "0" + hour;
    let minutes = date.getMinutes();
    if(minutes<10)minutes = "0" + minutes;
    
    socket.write(`${year}-${month}-${day} ${hour}:${minutes}\n`);
    socket.end();
});
server.listen(port);