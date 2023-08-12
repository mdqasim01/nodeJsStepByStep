const express = require('express')
const app = express()
app.get('/about',function(req,res){
    res.send("<h1>Hello From ExpressJs</h1>")
}).listen(8080)