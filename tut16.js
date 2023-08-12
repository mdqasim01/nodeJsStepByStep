const express = require('express')
const fs = require('fs')
const app = express()
app.get('/',function(req,res){
    // res.send("<h1>Hello From ExpressJs</h1>")
    fs.readFile('home.html',function(err,data){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        return res.end()

    })

})
app.get('/about',function(req,res){
    res.send("<h1>Hello From About</h1>")
})
app.post('/contact',function(req,res){
    res.send("<h1>Hello From Contact</h1>")
})
app.get('/service',function(req,res){
    res.send("<h1>Hello From Service</h1>")
})
app.get('/login',function(req,res){
    res.send("<h1>Hello From Login GET</h1>")
})
app.post('/login',function(req,res){
    res.send("<h1>Hello From Login POST</h1>")
})
app.put('/login',function(req,res){
    res.send("<h1>Hello From Login PUT</h1>")
})
app.delete('/login',function(req,res){
    res.send("<h1>Hello From Login DELETE</h1>")
})

app.listen(8080)