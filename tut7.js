const http = require('http')
var data = [{
    name: "Mohd Qasim",
    age: 19,
    DoB: null,
    city: "Sambhal"
}, {
    name: "Mohd Uvaish",
    age: 21,
    DoB: null,
    city: "Moradabad"
}]
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(JSON.stringify(data))
    res.end()
})
const port = 8080
server.listen(port, () => {
    console.log(`port is running at ${port}`)
})