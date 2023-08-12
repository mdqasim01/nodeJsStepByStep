const http = require('http')

const Myser = http.createServer(function(req,res){
    res.write("<h1>Hello {from} NodeJs Mohd Qasim.</h1>")
    res.end()
})
const port = 8080
Myser.listen(port,()=>{
    console.log(`'server is running' on ${port}`)
})   