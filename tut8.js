const http = require('http')
const PORT = 8080

const server = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.write("<p>something is <b>better</b> then nothing</p>")
    res.write("<input type='text' placeholder='Johd Doe'/>")
    res.end()
})

server.listen(PORT, () => {
    console.log(`your server is running ${PORT}`)
})