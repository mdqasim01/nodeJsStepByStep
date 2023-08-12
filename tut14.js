// Node js tutorial in Hindi #14 event an eventEmitter 

// var fs = require('fs')
// var rs = fs.createReadStream('./tut14.txt')
// rs.on('open',function(){
//     console.log('demo file is open')
// })


// custom events 

var events = require('events')
// const { EventEmitter } = require('stream')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('speak',function(name){
    console.log(name,'is speaking')
})

eventEmitter.emit('speak','qureshi')