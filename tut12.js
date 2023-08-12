//Node js tutorial in Hindi #12 Read file | File system
const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile("tut12.html",function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)