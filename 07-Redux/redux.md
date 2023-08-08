# redux

YT :- https://youtu.be/bbkBuqC1rU4

## redux vs redux toolkit

redux toolkit (or RTK) is a package (named - @reduxjs/toolkit) wraps around the core redux package and contains API methods and common dependencies that we think are essential for building a Redux app

in redux we have to writes lots of codes, but in react toolkit we have to write lesser codes

Like context api (useContext + useReducer) , it is also used in state management (to solve props drilling)

## store : A store that holds the state of your application. All global variable ( or state or slices ) is stored in store

Store is like a pizza, where each slices represent a part/piece of store

Ex- Store = {Auth data slice, User data slice, reviews data slices ...}

## action : An action that describes the changes in the state of the application.

## reducer (or functionality) : A reducer which actually carries out the state transition depending on the action.

The state of your whole application is stored in an object tree within a single store.
Maintain our application state in a single object which would be managed by the Redux store

"The only way to change the state is to emit (or dispatch) an action, an object describing what happened"
To update the state of your app, you need to let Redux know about that with an action
Not allowed to directly update the state object.

"To specify how the state tree is transformed by actions, you write pure reducers"
Reducer - (previousState, action) => newState

## Comparing Redux & Context API

https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p

## useSelector hook

fetch data from a slice. data flow : first store then slice

## useDispatch hook

to call a reducer from component

steps of redux in react

1. npm install @reduxjs/toolkit react-redux
2. create slice : any slice must have three variables, {name:"", initialState:{}, reducers:{} }
   reducers are utility function
3. export all reducers (or actions)
4. export slice reducer
5. create store using configureStore
6. list all slices in store
7. link react to redux :- wrap <App> around <Provider store={store}> to link redux to react
8. useSelector - fetch data from a slice.
9. useDispatch - to call a reducer from component

## reduce toolkit comes with Immer library

so whenever we want to return state, we can mutate them (ie we can modify state directly, instead of creating a new state)

// here state means store
// useSelector((state)=>console.log(state))

// useSelector is used to access state ( initialState of a slice )
// const count = useSelector((store) => store.myCounter.count);
// const count = useSelector((state) => state.myCounter.count);
// const { count } = useSelector((state) => state.myCounter);

## createAsyncThunk

redux toolkit also provide a function createAsyncThunk() to fetch an url, it returns a promise to use.
we can use [pending, fulfilled, rejected] states. By using these states, we can use extraReducers ( instead of reducers ) to do some extra task or check state management in redux Devtools

## Redux DevTools

chrome extension to see state change in redux state

## Redux data will be deleted, when we refresh browser tab
In redux data is not persisted if window will be refreshed
Solution -

1.  use localStorage and store data in plain format
2.  use localStorage and store data by encrypting it
3.  use redux-persist package
    https://www.npmjs.com/package/redux-persist
    https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/#:~:text=With%20the%20Redux%20Persist%20library,state%20will%20still%20be%20preserved.
4.  call api to set that data, on every page load (in <App>)
