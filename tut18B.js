module.exports = function (req, res, next) {
    console.log("current url is ", req.originalUrl)
    next()
}