const http = require("http");
const PORT = 8000;
//for handling files
const html = require("fs").readFileSync("./index.html");

//create wev server
const server = http.createServer((req, res) => {
    //Handling requests from the browser
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
});

server.listen(PORT,() => {
    console.log("server running!");
});