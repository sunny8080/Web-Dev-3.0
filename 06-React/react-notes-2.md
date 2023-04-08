
## List and arrays in useState
it can be used in creating form

## Controlled Components
maintains state inside component

# React Router
a framework used to navigation multiple pages without refreshing the page

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




