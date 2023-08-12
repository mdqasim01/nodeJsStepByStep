// Node js tutorial in Hindi #9 NPM (node package manager )

const http = require('http')
var uc = require('upper-case')
http.createServer(function(req,res){
    res.write(uc.upperCase('npm is stand for node package manager'))
    res.end()
}).listen(8080)






/*


import { upperCase, localeUpperCase } from "upper-case";

upperCase("string"); //=> "STRING"

localeUpperCase("string", "tr"); //=> "STRİNG"
*/