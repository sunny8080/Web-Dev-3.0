# Javascipt Basic Notes

To run js program outside the browser we need JS Engine Environment

Js + C++ = Node

in html script tag, can be added in three place inside <head>, just after start of <body> or, just before end of <body>  
best practice to add <script> is just before end of <body> tag

internal and external script

we can write js code inside scipt tag also

to run js in terminal -> node index.js

js is dynamically typed language

in js function is also an object

# JS DOM

1. Window :- global object
2. DOM : Document object model
3. BOM : Browser object model

document : an js object which contain all HTML codes

## Select a element

let selectedEle = document.getElementById("idName")

document.getElementById("idName")
document.getElementsByClassName("className")
document.getElementsByTagName(tag)
document.querySelector('#idName')
document.querySelector('.className')
document.querySelector('tag')
document.querySelectorAll('.className')
document.querySelectorAll('tag')

$0 -> return previous selected element

## update existing content

.innerHTML - gets or sets the element - it renders the tags - Hidden content won't be displayed
.outerHTML
.textContent - gets or sets textual content - it treat tags as text and it doesn't renders - it also show the hidden content
.innerText - gets or sets textual content

## inserting new HTML element

let newElement = document.createElement('tagName');
selectedElement.appendChild(newElement) // add at the end

## create Text node

### 1st way

let newPara = document.createElement('p');
let textPara = document.createTextNode('I am sunny');
newPara.appendChild(textPara);
selectedEle.appendChild(newPara) // add at the last

### 2nd way

let newPara = document.createElement('p');
newPara.textContent = "I am sunny";
selectedEle.appendChild(newPara)

### 3rd way : add anywhere in the elemtn

.insertAdjacentHTML(location_position, HTML_Text_content ) // (where, what)
location_position :- beforebegin, afterbegin, beforeend, afterend

### remove child element

// when we know parent and child element
parentEle.removeChild(childEle) // opposite of .appendChild()

// when we only know child element // childEle.parentElement -> return parent of child ele
childEle.parentElement.removeChild(childEle)

### Changing Css properties using js

content = document.querySelector('.myClass');

content.style.color = 'red';
content.style.cssText = 'color:green; font-size: 4rem;';
content.setAttribute("style", "color:red; border: 1px solid gray;");

content.setAttribute("id", "myId");
content.className // return a string which contains names of all the classes
content.classList // return a list/array which contains names of all the classes

classList have functions :- add(), remove(), toggle(), contains()

# Browser Events

monitorEvents(document); // to see all the event happening in document
unmonitorEvents(document); // to turn off monitorEvents

interface or blueprint
EventTarget : top level interface (inheritance : EventTarget -> Node -> element )
target.addEventListener(event_type, callback_fun)
.removeEventListener()
.dispatchEvent()

Event :- 'click'

## Phases of events:

capturing(finding taget), at target(when target found), bubbling (returning back) phase

by default addEventListener executes on bubbline phase
target.addEventListener(event_type, callback_fun, true) // to execute AEL in bubbling phase

### event object (index12.js)

### Default action

<a> defualt action - open a link

.preventDefault() // to stop default action

### Avoid too many events (discussed in index12.js)

event.target
event.target.nodeName === "SPAN"

## How to add scipt tag safely in body tag

best practice to write <script> is at the end of <body> tag, but we can also write it inside <head> tag
DOMContentLoaded :- this event executes when all whole DOM is build (or all html is rendered)
<scipt>
document.addEventListener('DOMContentLoaded', function(e){
// funcion values
// funcion values
// funcion values
// funcion values
});
</scipt>

## measure performance (in index13.js)

performance.now() // return current timestamp

reflow (doing calculation for new element) and repaint (show new element to the screen) process
reflow :- process of calculating the dimension and postion of page element (slower than repaint)
repaint :- process of drawing pixels to the screen (faster than reflow)

### Document Fragment

it is light weight document object, no repaint or reflow occur when we add elements to this, so it is faster

let fragment = document.createDocumentFragment()

## Call Stack

Js is single threaded language, so process one cmd at a time
Js :- 1) 'run-to-completion' nature of code
:- 2) Js doen;t execute multiple lines and function at the same time

## Event Loop

synchronous
asynchronous : event listener function
event listener will execute only when all function in the call stack will be executed, that's why event loop happens and event lis fun becomes async
So if call stack fun are executing and event listener fun wants to execute then it won't execute and wait in a queue to empty the call stack, after call stack empty, event lis fun (async fun) will move to call stack to execute : that is call event loop

philip robert on event loop : https://www.youtube.com/watch?v=8aGhZQkoFbQ

async code use js event loop to execute
any async code handled by browser

### setTimeOut fun :- async

setTimeOut(callback, mili_timout_time)

hack : setTimeOut(callback, 0) :- callback will execute after call stack empty, and dont' execute on simultaneously // (wait time 0)

## Asynchronous code

## API (see cheatsheet)

let p = new Promise(callback(resolve, reject){} ); // create new promise : to use execute program in parallel
Promise // check status (fulfilled, rejected, pending)
then() and catch()
multiple promise in parallel
resolve and reject a promise
promise chaining

Async - await

async funtion always returns a promise

## Fetch API

JSON : js object notation
json placeholder // fake fethch api
fetch() // get // returns promise
fetch(url, options) // post

## Closures : nested function

bundle of function
function inside funtion
clousure binds a function to its required data with references, and required data is called lexical environment

closure is VVI for interview
NOte : data / surrondign reference is binded, and not copy of data/surronding is binded
it is game of reference and not copy

## lexical scoping and closures

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

## Destructuring assignment

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## Symbol primitive data type in JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
