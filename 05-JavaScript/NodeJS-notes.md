YouTube -
https://www.youtube.com/watch?v=CTxrpmY1At8&list=PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz&ab_channel=Codevolution

## check version

npm -v
node -v

##

## npm ls -

list down all the locally installed modules
nodejs is an single threaded

## run a javascript file (app.js)

node app or npm app.js

## Global Object in nodejs

_\_filename
_\_dirname -> return absolute path of directory which is executing
setTimeout(myFun, timeInS)
setInterval(myFun, timeInS)

## Modules in Node-

ways to export

1. module.exports.myFun1 = myFun1
2. module.exports = {
   myFun1 : myFun1,
   myFun2 : myFun2,
   }

how to import
const myModule = require('./myModule')

## Builtin Module in Node

fs // file system
events // used to listen and emit an event
http // used to create server
https
url // using in routing
querystring

## Events

EventEmitter in node -
create an event and emit when required

## Streams in Node-

Types of Stream

1. Readable
2. Writable
3. Duplex
4. Transform

## Piping in Node -

Piping is a mechanism to connect output of one stream to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.

## Chaining in Node -

Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.
