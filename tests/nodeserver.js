var http = require("http")
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write("<h1>Hello World!</h1>")
    var q = url.parse(req.url, true).query
    var txt = "GET :" + q.year + " " + q.month // http://localhost:8000/?year=2022&month=May
    res.write("URL :" + req.url)
    res.end(txt)
}).listen(8000)