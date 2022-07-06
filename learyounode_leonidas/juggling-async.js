const http = require("http");
const bl = require("bl");

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let flags = [3];
flags[0] = false, flags[1] = false, flags[2] = false;
let strings = [3];
strings[0] = "", strings[1] = "", strings[2] = "";

function getAwait(url, pos, stringsA, flagsA){
    http.get(url, response => {
        response.pipe(bl((err, data) => {
            if(err) return console.error(err);
    
            stringsA[pos] = data.toString();
            flagsA[pos] = true;

            if(flagsA[0] == true && flagsA[1] == true && flagsA[2] == true){
                console.log(stringsA[0]);
                console.log(stringsA[1]);
                console.log(stringsA[2]);
            }
        }));
    
    })
}

getAwait(url1, 0, strings, flags);
getAwait(url2, 1, strings, flags);
getAwait(url3, 2, strings, flags);

