# mongoose - aggregate() - Aggregation Pipelines

can be used to group values from multiple documents together ( like groupBy in SQL )
https://www.mongodb.com/docs/manual/aggregation/
https://mongoosejs.com/docs/api/aggregate.html

## auth - session id, token authentication

https://jerrynsh.com/all-to-know-about-auth-and-cookies/
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

stateFull vs stateless

1. stateful - session id, we have keep session id in our server
2. stateless - jwt (json web token) - creates a token using secret key, we can store it in anywhere ( ex cookies )

- serverless architechture && saves memory && can create long term session

## cookies and cookie-parser

https://youtu.be/RNyNttTFQoc?list=TLPQMjcwNDIwMjMEY12sDKaPzg

## request and response header

https://youtu.be/31zzBJVcg44?list=TLPQMjgwNDIwMjMsehzUAv9-eQ

## XSS and CSRF

https://youtu.be/EoaDgUgS6QA
https://www.youtube.com/watch?v=eWEgUcHPle0

## we can set TOKEN in postman

## forget password

## send emails using nodemailer

and Fake SMTP server using mailtrap or ethereal

## HTTP Parameter Pollution

it is a web attack done by sending sending same parameter multiple time in url
ex :- https:/localhost:5000/api/v1/users?id={user_id_1}&id={user_id_2} - here we are sending two user id with the same parameter name (id)
ex :- example.com/search?firstName=John&firstName=Sunny&lastName=Kumar&lastName=Doe

it depends on server how it takes, it is possible server take only first value (user_id_1) or last value (user_id_2) or both ([user_id_1, user_id_2])
it can be done in req.query (url) or req.headers or req.body
it can be prevented by using hpp middleware, by using this, only last occurrence will be selected

express - all occurrence
asp .net - all occurrence
PHP/Apache - takes last occurrence
PHP/Zeus - takes last occurrence
JSP, Servlet/Apache Tomcat - takes first occurrence

## command to build docgen from postman json in windows

both should in same folder
docgen - docgen windows exe name,
Project.postman_collection.json - postman exported json

./docgen build -i Project.postman_collection.json -o ./index.html


## Razorpay integration
https://razorpay.com/docs/partners/aggregators/partner-auth/payment-gateway

use orders api
amount = amount*100
webhook in razorpay


## populate document and subdocument
https://stackoverflow.com/questions/24414975/mongoose-populate-sub-sub-document
