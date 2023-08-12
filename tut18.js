const express = require('express')
const app = express()
const router = express.Router();

const urlCheck = require('./tut18B')

app.get('/', function (req, res) {
    res.send("Home Page")
})
router.get('/login', urlCheck, function (req, res) {
    res.send("login Page")
})
router.get('/about', urlCheck, function (req, res) {
    res.send("About Page")
})
app.use('/', router)
app.listen(8080)