//window.addEventListener("load", () => {
  // Hello World
  const http = require("http")
  var dt = require('./myfirstmodule')

  const hostname = "127.0.0.1"
  const port = 8000

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("The date and time are currently: " + dt.myDateTime())
    res.end()
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })

//});