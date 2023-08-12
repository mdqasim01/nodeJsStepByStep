//Node js tutorial in Hindi #10 send Mail from local server

var nodeMailer = require('nodemailer')
var transport = nodeMailer.createTransport({
    host: 'razaqasim123216@gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        email: 'razaqasim123216@gmail.com',
        pass: 'Noorjahan@244102'
    }
})

var mailOptions = {
    from: 'razaqasim123216@gmail.com',
    to: 'qasimkhan786686@gmail.com',
    subject: 'test nodemail',
    text: 'Nothing'
}

transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error)
    } else {
        console.log("mail has been sent", info.response)
    }
})