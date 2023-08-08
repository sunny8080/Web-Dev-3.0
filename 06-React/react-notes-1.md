check version of nodejs -> node -v

# Basic Intro ------------------------------------------------------------------------------------------

## create react app

npx create-react-app my-app // it will create a folder with name my-app which contain all react files
npx create-react-app . // it will create a folder in current directory which contain all react files

## react folder name does not contain capital letters

## to run start script of my-app/package.json

npm start
after then react will be open at localhost:3000

## Remove files which will not be useable in project

## Note :- Don't delete any file or content, it cause trouble in hosting

this can be done when we don't want to host it online, Don't do it if you want to host it online

1. from my-app/public remove delete all except index.html
2. From my-app/src remove {setupTests.js, reportWebVitals.js, logo.svg, logo.svg, App.test.js,
   content of index.css and App.css, comments of index.js}
3. remove reportWebVitals line from index.js and reportWebVitals(); {my-app/src}
4. from my-app/src/App.js logo line (line no 2 and 8) and all inside content of <header>

## clone react-tailwind-css-starter-pack

https://github.com/thepranaygupta/react-tailwind-css-starter-pack

## to install all dependencies in package

npm i

# About npm (node package manger)

https://www.youtube.com/watch?v=s8G5Cjrj81I&feature=youtu.be

## package.json ??

https://docs.npmjs.com/cli/v9/configuring-npm/package-json

## to install tailwindcss

npm install tailwindcss
npm i tailwindcss // as a dependencies
npm i tailwindcss -D // as a dev dependencies // do it as dev dependencies
npm uninstall tailwindcss
npm i

then
npx tailwindcss init
then add {"./src/\*_/_.{js,jsx,ts,tsx}"} in tailwind.config.js
then add {@tailwind base; @tailwind components; @tailwind utilities;} in index.css

## Netlify page not found solution

Add these lines to netlify.toml in root folder
[[redirects]]
from = "/\*"
to = "/index.html"
status = 200

## when a package version starts from ^ (^5.2.1) then this package will be updated, if available, on [npm i],

but if (^) is not in there then version will not be upgrade

## node modules - contains codes of a package

and it is not uploaded in github (so add it to gitignore file)

# React ------------------------------------------------------------------------------------------

It is a js library, used to create reusable component. It is all about component
we can say component is giving custom HTML element

declarative approach
SPA approach - single page application

React alternative - Angular, Vue

index.js -> file while will run first, entry point

jsX -> (similar to js) javascript XML format code (HTML code inside js) - develope friendly code, browser can't understand

index.js -> index.html gives root element -> react convert root to react root and passed app component ->  
 App.js render HTML component using passed react root

npm start :- convert user code to browser friendly code

any component jsx (or js) file can return only one html element, so if we have multiple elements, then enclosed whole elements inside a div

link a css or other file in jsx -> import './Item.css'
export a function / component -> export default Item

props :- properties or arbitrary inputs sent to a react component

{itemName} // return value of itemName

className :- in react js, className is used instead of class, as class is a reserved keyword in javascript

1.create a component (or custom HTML element) in react
2.pass data in component using props
3.diff ways to send data in component

4. props.children :- By default, component inside another is not visible, so we have to use it to make visible all children element component of a component

5. props.className :- by default, css prop of child component doesn't work properly, then we have to use it to work well, we can send className to our component, in this way. We can also use passed classes and existing class by js (`existingClass ${props.className}`)

## 6. props :- by this keyword we can access all custom parameter passed in react component, it is a js object

# React 2 ------------------------------------------------------------------------------------------

7. on prop :- we can use all defaults (like event listener) using prop on prop (like onClick={clickHandler})

8. state :- a snapshot of component data

## 9. useState :- a react hook ( or utility function ), and must import in top, used to repaint the UI. It always returns an array with two elements first value of variable, and 2nd fun to change the value (or state).

    const [something, setSomething]  - setSomething function change state of something, and re-render somthing. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event (so there is scheduling).

Calling the set function does not change the current state in the already executing code. It only affects what useState will return starting from the next render. Because after changing the state variable is changed. So old variable still have old value. And after handler call new variables becomes old variable

function handleClick() {
setName('Robin');
console.log(name); // Still "Taylor"! // old name, name is not updated yet
}

Must Read :- https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state

10. Lifting the state up (VVI for interview) - child to parent communication, using props function.
    How to send data from child to parent :- from parent, send function to child using props, in child call that same function using props and change.
    This is like prop drilling, sending data from child to parent

Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level

11. Always use key attribute with map function

## useEffect hook :- used to manage side effects

if we want to do some task after rendering the component (task is called side effect ) => use useEffect

side effect is a change that affect something outside the component being rendered
(ex :- DOM update, API call, changing the document title, modifying state of parent component, modifying browser history)

After render an component, useEffect hook will start executing for that component

variation :-

1. Every render :- useEffect(callback) => callback will execute for each render of component
2. First Render :- useEffect(callback, []) => callback will execute once when element is rendered first
3. First render + whenever dependency change :- useEffect(callback, [dependency_list]) => callback will execute only when any element in dependency_list will change
4. to handle unmouting of a component (remove the old event listener) :- useEffect(callback{ ABC ; return callback2;}) :- first callback2 will execute then ABC will execute

mount :- render krna
unmount :- remove krna

## class based component - life cycle methods (old things, similar to useEffect)

component -> function based component, class based component
life cycle methods -> componentsDidMount, componentsDidUpdate, componentsWillUnmount

Get event data - event, event.target, event.target.value
