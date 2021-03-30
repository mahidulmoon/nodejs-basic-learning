console.log(__filename);//filepath
console.log(__dirname);//directory path


var url = 'http://mylogger.io/log';

function log(message){
    console.log(message);
}

module.exports.log = log;
//module.exports.endPoint = url;