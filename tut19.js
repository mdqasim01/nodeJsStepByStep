const express = require('express')
const app = express()
const router = express.Router();

const urlCheck = require('./tut18B')

app.get('/', function (req, res) {
    // res.send("Home Page")
    res.sendFile(__dirname+"/home.html")
})
router.get('/login', urlCheck, function (req, res) {
    res.sendFile(__dirname+"/login.html")
})
router.get('/about', urlCheck, function (req, res) {
    // res.send("About Page")
    res.sendFile(__dirname+"/about.html")
})
app.use('/', router)
app.listen(8080)