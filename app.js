var log = require('./logger');

function sayHello(name){
    console.log('Hello'+name);
}

sayHello('Moon');

console.log(log);

logger.log('message'); //module description