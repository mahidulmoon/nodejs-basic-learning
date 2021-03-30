var logger = require('./logger');

function sayHello(name){
    console.log('Hello'+name);
}

sayHello('Moon');

console.log(logger);

logger.log('message'); //module description