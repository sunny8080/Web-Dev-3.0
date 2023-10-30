Day 1
Course -
Web Technologies : JavaScript: Security Essentials_LinkedIn
id - 71950

Notes-

1. Most Common Attacks / Threats

i) Cross-site scripting (XSS)
it is when malicious script is injected into a trusted site typically through a form or field
solution -
sanitize and validate data properly with escaping syntax, also make sure
never insert untrusted data to our site
use escape chars of respective tags instead of {`,&, <, >, ,", /, '}
use element.textContent to populate the DOM with safe usage
use React and angular safe frameworks

ii) Cross-site request forgery (CSRF)
any form of malicious code that is executed when a user is authenticated through a trusted website
ex - transferring funds to an attacker's account, changing a victim's email address, or they could even just redirect a pizza to an attacker's address
Solution-
same URL - check headers to validate the request is from same origin or not, the header of request must be from the same http url as the server
avoid allowing CORs (Cross origin request)
check for encrypted or signed token
use JWT (JSON web token) tokens with tools like Auth0 for authentication and access
use React and angular safe frameworks

iii) Sensitive data exposure
data leaked by apis, data breaches
Solution -
Use encryption technique like Cryptography
use Crypto library of NodeJS

iv) Server-Side injections (SSIJ) attacks
when a untrusted data is sent to a interpreter as a command or query, to run command in a loop
Solution-
never use eval(), setInterval(), setTimeout()
use prepared statement to execute a SQL query and not the dynamic queries
validate all user input before processing
using JSON.parse for parsing json data
use strick mode in javascript

v) Obfuscation
it is art of hiding your code behind an algorithm
it transorm our code with variables, functions and argument renaming and removal
Obfuscate - hiding original data and changing variables, functions and argument renaming and removal, using this no one can read our data
basically we scramble our code, so hackers can't read client side code
use cryptography

tool - Javascript Obfusctor tool- tools to scramble our tool

2.  OWASP - to get reference/research and snippet of any kind of threat
    snyk - tool to identify potential issue in our dependencies
    RetireJs - tool to scan known issues
    OWASP App sensor
