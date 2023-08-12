// Node js tutorial in Hindi #17 Middleware 

const express = require('express')
const app = express()

const checkUrl = function (req, res, next) {
    console.log("current route is ", req.originalUrl)
    next()
}
app.use(checkUrl)
app.get("/", (req, res) => {
    res.send("Home Page")
})
app.get("/about", (req, res) => {
    res.send("About Page")
})
app.get("/login", (req, res) => {
    res.send("login Ppage")
})

app.listen(8080)