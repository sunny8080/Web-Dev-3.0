# Backend

frontend, backend
client server model
http, https :- standard protocol in client server model
DNR :- Domain name resolution

IP address
TCP connection, 3 way handshake, encryption, get request
HTTP request - Get (retrieve/fetch), Put(update), post(submit), delete(remove)
idempotent request

# Express

a framework, used to create server side application

1. create a folder and go to that folder, then
2. npm init -y
3. npm i express
4. create server.js

middleman, postman
body parser - a middleman

# MongoDB ; NoSQL database

data can be stored in the form of document, key-value pairs or in the form of graphs
CRUD - Create Read Update Delete
mongosh

mongoose :- ODM (object data modeling) library, used to connect DB and server

# ///////////////////

teacher themes
postman / insomnia / petstore swagger / Thunder client vs code extension
NodeJs
Chrome
GIT
DB - MongoDB
heroku
mongodb compass
postman
Express js( web framework)

## mongod :- command in cmd to run mdb server

# Web requests (HTTP request)

GET - request information
POST - add to database
PUT - edit to database
DELETE - delete from database
HEAD
CONNECT
OPTIONS
TRACE
PATCH

## HTTP response status codes :- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

# Express

npm init (or npm init -y)
npm i express
change script in index.js to : "start": "node index.js"

# nodemon - used to refresh server, whenever there is some change

npm i nodemon -D

change in scripts of package.json {'start' : 'node index.js' } to {'start': 'nodemon index.js'}

# npm package used

tailwindcss
react-icons
react-toast
react-hot-toast
date-format
express-fileupload
yamljs
dotenv
mongoose
cookie-parser
colors
slugify
node-geocoder

## npm package used 2

express-fileupload - used to upload file and photos
multer - used to upload file and photos
bcrypt - to encrpt password
jsonwebtoken - to create jwn token
cookie-parser - to set, get, delete a cookie
morgan - HTTP request logger
crypto - use to encrypt and decrypt a data, used to generate token ( it is nodejs module )
nodemailer - used to send emails
mongo-sanitize - used to protect from sql injection
express-mongo-sanitize - used to protect from sql injection
helmet - it secures from XSS and others
xss-clean - to prevent from writing html tags (like script) in input (sanitize data coming from POST body or GET queries and url params)
express-rate-limit - use to limit repeated request
hpp - use to prevent from http param pollution
cors - Enable CORS (Cross-origin resource sharing)

## on deploying change build command in package.json to

"start": "node index.js"

also change port as :
const PORT = process.env.PORT || 4000;

## swagger - used to write API documentation

npm pkg :- swagger-jsdoc, swagger-ui-express

## hide secrets :- .env file

by using dotenv npm pkg

## ORM (Object Relational Mapper, for MySQL) vs ODM (Object Data Modeling, for MongoDB)

## Mongoose

There are lots of ODM or ORM for Mongodb. One of them is Mongoose, it is a Node.js-based Object Data Modeling (ODM) library for MongoDB.

## run custom command using npm

npm run dev // dev is a custom command

## middleware

some check / functionality injected in between ( or just before or just after ). Also called life cycle event

## next() - directed to another middleware or another function/check or another path

after next() nothing happens
in mongoose - pre, post middleware
it doesn't accept arrow (=>), only function are allowed

## token - token is like a car key,

expire the token, after some time / days
token = Header + Payload + Signature

## Login User

1 get all information
2 check mandatory fields
3 get user from database
4 compare and verify password
5 give token or other information to the user

## Protecting the route

1 use middleware
2 check for token presence
3 verify the token
4 extract info from payload
5 NEXT()

## Mobile Vs Web

Just send the token
Send in cookie, httpOnly
In headers
body

## middleware

https://mongoosejs.com/docs/middleware.html
Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.
To use document middleware as query middleware - {document:false, query:true}
To use query middleware as document middleware - {document:true, query:false}
deleteOne, updateOne - default query middleware and not document middleware

static - express
http
https

## mongoose middleware or hooks :- pre, post

## folder structure in backend

config
controllers
middleware
models
routes
utils

## Express error handling by custom handlers

## how to use async/await in expressJs

https://www.acuriousanimal.com/blog/20180315/express-async-middleware
https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016

## mongodb indexes

## Note MUST :- mongoose EventEmitter pre & post

https://mongoosejs.com/docs/middleware.html
Calling pre() or post() after compiling a model does not work in Mongoose in general. For example, the below pre('save') middleware will not fire.
This means that you must add all middleware and plugins before calling mongoose.model().

As a consequence, be careful about exporting Mongoose models from the same file that you define your schema. If you choose to use this pattern, you must define global plugins before calling require() on your model file.

so we have to add all pre and post middleware (or any middleware), before creating model (or before exporting model);

## nested routes in express

reroute/nested route :- router.use('/:bootcampId/courses', courseRouter)

to use parent req.params in child params use - {mergeParams:true} in child router
ex :- const router = express.Router({mergeParams:true}); // it is child router

## mongoose populate, reverse populate

Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s)
https://mongoosejs.com/docs/populate.html

## mongoose virtuals :-

In Mongoose, a virtual is a property that is not stored in MongoDB. Virtuals are typically used for computed properties on documents.
https://mongoosejs.com/docs/guide.html#virtuals
https://mongoosejs.com/docs/tutorials/virtuals.html

## mongoose virtual populate

https://mongoosejs.com/docs/populate.html#populate-virtuals

Keep in mind that virtuals are not included in toJSON() and toObject() output by default. If you want populate virtuals to show up when using functions like Express' res.json() function or console.log(), set the virtuals: true option on your schema's toJSON and toObject() options.

## toJSON and toObject

// required to use bootcamps[0].toJSON() and JSON.stringify(bootcamps[0]) for reverse virtual properties
toJSON: { virtuals: true },
// required to print reverse virtual properties in console // ex - console.log(bootcamps[0]);
toObject: { virtuals: true }

## mounting
