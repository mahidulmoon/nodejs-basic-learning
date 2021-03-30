var logger = require('./logger');
const os = require('os');

var totalmemory = os.totalmem();
var freememory = os.freemem();

function sayHello(name){
    console.log('Hello'+name);
}

sayHello('Moon');
console.log(`Total Memory : ${totalmemory},and Free Memory: ${freememory}`)

console.log(logger);

logger.log('message'); //module description



//file system

const fs = require('fs');

fs.readdir('./',function(err,files){
    if (err) console.log('Error',err);
    else console.log('Result',files);
});


// class

const eventEmitter = require('events');
const emitter = new eventEmitter();


//register a listener

emitter.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});

//raise and event
emitter.emit('messageLogged',{id: 1, url: 'http://'});