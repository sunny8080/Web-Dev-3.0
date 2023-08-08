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
5. To just link (or <a>) use <Link> but to denote active page, use <NavLink>. <NavLink> adds a class "active" on element to denote current class
6. Home ('/') is a kind of parent route.

Nested routing :- Parent element won't allow to render child element. To render child element use <Outlet>. There is a problem using this, parent element will always visible always on child element, to overcome this use "index" keyword for default routing

<Outlet> :- use it to if we want to render child route element inside parent route element, otherwise child routes won't render
it should used in parent element to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

index attribute in Route :- denotes default route in that path.

<NavLink> vs <Link> - navlink adds a active class on active link

<Link> vs useNavigate hook

"\*" - default route when no route is matching

# useNavigate Hook

used to navigate different different route
this hook returns a function, using that we can navigate to any path

we can back from a route by useNavigate()(-1)

# Protect routes

if user is logged in then show dashboard otherwise send to login page

# Custom Hooks

Go to project - 22-random-gif-generator

## axios vs fetch

# context api, state management (useContext hook)

context - snapshot of data

rules -

1. creation of context
2. provision of context - provide data to required node
3. consuming

Go to project - 23-sunny-blog-context-api

## Props drilling :- sending data from parent to child

Prop drilling in react is the process of passing data from one component via several interconnected components to the component that needs it

## state lifting up :- sending data from child to parent

## env files

# useSearchParams hook : react-router-dom

The useSearchParams() hook is a built-in hook in the react-router-dom package that allows you to access and update the search parameters in the current URL query string. The hook returns an array with two items:

1. The first item is an instance of the URLSearchParams class that represents the search parameters in the current URL.
2. The second item is a function that can be used to update the search parameters. When this function is called with a new searchParams instance or an object of key-value pairs, the search parameters in the URL are updated accordingly.

```js
const [searchParams, setSearchParams] = useSearchParams();
// current path - example.com/pics/sunny?day=10&&date=1234
searchParams.get('day'); // 10
searchParams.get('date'); // 1234
setSearchParams({ day: 20 });
```

# useLocation hook : react-router-dom

The useLocation () hook is a built-in hook in the react-router-dom package that allows you to access the current location in your React component.
The useLocation hook returns an object with the following properties:

1. pathname : The current URL pathname (excluding the domain and query parameters).
2. search : The query string in the current URL (including the "?" character).
3. hash : The anchor portion of the current URL (including the "#" character).
4. state : An optional state object that was passed to the current location ().

```js
const location = useLocation();
// current path - example.com/pic/sunny?day=10&&date=1234
location.pathname; // pic/sunny
location.search; // ?day=10&&date=1234
```

# useReducer hook

https://react.dev/learn/extracting-state-logic-into-a-reducer

useReducer work same as useState, syntax are diff
const [tasks, setTasks] = useState(initialTasks); // useState
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks); // useReducers
const [state, dispatch] = useReducer((state, action)=>{...}, initialTasks); // useReducers general practice

To convert from useState to useReducer:

1. Dispatch actions from event handlers.
2. Write a reducer function that returns the next state for a given state and action.
3. Replace useState with useReducer.

# useMemo hook

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
const cachedValue = useMemo(calculateValue, dependencies)
https://react.dev/reference/react/useMemo#usememo
https://youtu.be/-bEzt5ISACA

# useCallback hook

useCallback is a React Hook that lets you cache a function definition between re-renders.
const cachedFn = useCallback(fn, dependencies)
https://react.dev/reference/react/useCallback

# memo

memo lets you skip re-rendering a component when its props are unchanged.
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
https://react.dev/reference/react/memo

# useRef hook

useRef is a React Hook that lets you reference a value that’s not needed for rendering.
https://react.dev/reference/react/useRef
const ref = useRef(initialValue)

You can mutate the ref.current property. Unlike state, it is mutable.
When you change the ref.current property, React does not re-render your component. React is not aware of when you change it because a ref is a plain JavaScript object.
Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.
By using a ref, you ensure that:

1. You can store information between re-renders (unlike regular variables, which reset on every render).
2. Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
3. The information is local to each copy of your component (unlike the variables outside, which are shared).

# npm pacakge used till now

tailwindcss
react-icons
react-hot-icons
react-router-dom
react-toastify
react-hot-toast
axios :- fetch data from a api

# npm react library

react-otp-input
react-hook-form
react-router-dom

# hooks used till now

useState - to manage states
useEffect - to call api
useNavigate - to redirect or move to other path
custom-Hooks - we can create custom hooks
useContext - used in context api to get centralized data
useSearchParams - built-in hook in react-router-dom package, allows us to access and update search parameters in current URL query string
useLocation - built-in hook in react-router-dom package, allows us to access current location in your React component, return {pathname, search, hash, state}
useReducer
useMemo
useCallback
useRef
useSelector - used to fetch data from redux slices
useDispatch - used to call slice reducer in redux

# elements in react

<Link/>
<NavLink/>
<Navigate>
<> </> :- fragment

## react events

onClick
onChange
onSubmit

# to ignore warning in netlify, change build command of netlify to - CI=false npm run build

## useForm hook

https://react-hook-form.com/api/useform/

## state management in react

prop drilling
lifting up
states
redux - centralized store, slices, reducers
context api
