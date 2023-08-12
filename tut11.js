const http = require('http')

const server = http.createServer(function(req,res){
    res.write('How Are Your Nodemon ?')
    res.end()
}).listen(8080)