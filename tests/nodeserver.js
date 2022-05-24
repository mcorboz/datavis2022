const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
//const url = require("url")

app.get('/', function (req, res) {

    fs.readFile("demofile1.html", function (err, data) {
        
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(data)

        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err
            console.log('Saved!')
        })

        return res.end()
        
        /* res.write("<h1>Hello World!</h1>")
        var q = url.parse(req.url, true).query
        var txt = "GET :" + q.year + " " + q.month // http://localhost:8000/?year=2022&month=May
        res.end(txt) */
      
    })
})

app.listen(8000)