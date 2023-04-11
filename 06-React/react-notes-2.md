## List and arrays in useState

it can be used in creating form

## Controlled Components

maintains state inside component

# React Router

a framework used to navigation multiple pages without refreshing the page
( project - 21-study-notion )

steps :-

1. npm i react-router-dom
2. include <App/> within <BrowserRouter>
3. <Routes> - create many routes
4. <Route path="" element={}> - create single route
5. To just link (or <a>) use <Link> but to denote active page, use <NavLink>. <NavLink> adds a class "active" on element to denote curret class
6. Home (/) is a king of parent route.

Nested routing :- Parent element won't allow render child element. To render child element use <Outlet>. There is a problem using this, parent element
will always visible always on child element, to overcome this use "index" keyword for default routing

<Outlet> :- if we want to render child route element inside parent route element, otherwise child routes won't render
indes attribute in Route :- denotes default route in that path.

# useNavigate Hook

used to navigate different different route
this hook returns a function, using that we can navigate to any path

we can back from a route by useNavigate()(-1)

# Custom Hooks

## axios vs fetch

# context api, state management (useContext hook)

context - snapshot of data

rules

1. creation of context
2. provision of context - provide data to requirred node
3. consuming

## Props drilling :- sending data from parent to child

Prop drilling in react is the process of passing data from one component via several interconnected components to the component that needs it

## state lifting up :- sending data from child to parent

## env files

# useSearchParams hook : react-router-dom

The useSearchParams() hook is a built-in hook in the react-router-dom package that allows you to access and update the search parameters in the current URL query string. The hook returns an array with two items:

1. The first item is an instance of the URLSearchParams class that represents the search parameters in the current URL.
2. The second item is a function that can be used to update the search parameters. When this function is called with a new searchParams instance or an object of key-value pairs, the search parameters in the URL are updated accordingly.

# useLocation hook : react-router-dom

The useLocation () hook is a built-in hook in the react-router-dom package that allows you to access the current location in your React component. 
The useLocation hook returns an object with the following properties:
1. pathname : The current URL pathname (excluding the domain and query parameters).
2. search : The query string in the current URL (including the "?" character).
3. hash : The anchor portion of the current URL (including the "#" character).
4. state : An optional state object that was passed to the current location ().

# npm pacakge used till now

tailwindcss
react-icons
react-hot-icons
react-router-dom
react-toastify
react-hot-toast
axios :- fetch data from a api

# hooks used till now

useState
useEffect
useNavigate
custom-Hooks
useContext
useSearchParams
useLocation

# elements in react

<Link/>
<NavLink/>
<Navigate>
<> </> :- fragment
