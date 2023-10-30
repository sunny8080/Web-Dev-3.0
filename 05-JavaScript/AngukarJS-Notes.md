Angular is a js framework

https://www.youtube.com/playlist?list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

## Intro

1. AngularJS Architecture
2. Models and controllers
3. Directives and types
4. Form validation
5. Filters
6. Services and types

MVVM vs MVC (Model View Controller)

## MVC design pattern - components -

1. Model - responsible for storing the data
2. view - presentation of this data
3. COntroller - responsible for action taken by user on view container and those action are handled by the user (or business logic)

## Features

Angular Directives
Dependency injection
two way data binding - change to the model update the view, change to the view update the model
Angular is based on MVC architecture
Bootstrapping AngularJS - starting angular

## $scope

Scope is an object that refers to the application model. It binds HTML (view) and JavaScript(controller).
It refers to the application model, acts like glue between application controller and the view. It can watch expressions and propagate events.
Every controller has an associated $scope object.

we attach the angular model to $scope object
it is angular object
used to get and set angular variable

## $rootScope

All applications have a $rootScope which is the scope created on the HTML element that contains the ng-app directive. This is available in the entire application.

$rootScope is available globally (for all controllers), whereas $scope is only available to the controller that has created it and it's children

## 2 ways to start/bootstrapping angularJS

1. Automatic Bootstrapping - <html ng-app="myApp">
2. Manual Bootstrapping - creating module using angular object

angular - AngularJS object, used to create model

## module in angular

A module is a container for different parts of your application i.e controllers,
services, directives, filters, etc.
Use the angular object's module() method to create a module.

## controller

In angular a controller is a JavaScript function. The job of the controller is to build a
model for the view to display
A controller function is responsible for setting model properties and functions. This can be done only through $scope.

## Directive

Directives are the markers in DOM element that tell angular HTML compiler to attach a specified behavior to that DOM element. Directives give HTML new functionalities.

Directives can perform the following:

DOM Manipulation
Data Binding
Refer Controllers and modules
Events handling
CSS modification
Directives can even decide where the view will load.

## binding expression

{{ }} // used to insert variables

### built-in directives

ng-app // ng-app directive indicates which part of the page (either entire HTML page or portion of it) is the root of the Angular application.
ng-model="name" // used to update the model when view change // can be used with input, select, textarea, checkbox
ng-controller="myController"
ng-disabled // sets the disabled attribute on the element
ng-show / ng-hide // shows or hides the given HTML element based on the expression provided to the ngShow attribute.
ng-if / ng-switch // directives to display HTML elements based on conditions or cases.
ng-repeat // Iterates over a collection of items and generate HTML from it.
ng-include // used to fetch, compile and include an external HTML fragment.
ng-bind

> ng-if removes the HTML element completely from the DOM, whereas the ng-show + ng-hide just applies the CSS property display: none; to the elements.

###

> $index - to get index of item in ng-repeat
> $parent.$index - to get index of parent of item in ng-repeat
> ng-init="parentIndex = $index" - to get index of parent of item in ng-repeat

### Event directives

ng-change - Evaluates the given expression when the user changes the input. The Change expression is only evaluated when a change in the input value causes a new value to be committed to the model.
ng-checked - Sets the checked attribute on the element, if the expression inside ngChecked is true
ng-click - Allows you to specify custom behavior when an element is clicked.
ng-selected - Sets the selected attribute on the element, if the expression inside ngSelected is true

### Directives for Data-Binding

ng-bind - Has one-way data binding ($scope --> view). It is used to replace the text content of the specified HTML element with the value of a given expression.
ng-model - Is intended to be put inside of form elements and has two-way data binding ($scope --> view and view --> $scope).
ng-init - initializes an AngularJS Application data. It is used to put values to the variables to be used in the application
ng-src - Can be used in place of original 'src' attribute in img
ng-style - Facilitates setting up CSS style for the HTML elements

### Form Directives

ng-pattern - Does pattern validation. Often used for text based input controls.
ng-minlength / ng-maxlength - Does the min/max length validation checks.
ng-required - Sets the 'required' attribute on the element if the AngularJS expression inside ngRequired evaluates to true.
ng-submit - Enables binding AngularJS expressions to onsubmit events.

## AngularJS Filters

Filters allow us to format the data to display on UI without changing original format.
it can do format sort and filter data
They can be used with an expression or directive using | (pipe) sign.
Usage - {{expression | filter}} , {{expression | filterName : parameter}}
Ex -
{{ firstName | uppercase }},
{{expression | limitTo : limit : begin}}
{{dob | date : "dd/MM/yyyy"}}
ng-repeat="employee in employees | orderBy: 'salary' : 'false'" // sort in asc by salary column
ng-repeat="employee in employees | orderBy: '+salary'" // sort in asc by salary column

### Some of the filters available in AngularJS that are commonly used are

uppercase - Converts a text to uppercase
lowercase - Converts a text to lowercase
number - formats number as a text, add a thousand separator ( , ), can limit decimal places
currency - Formats text or number to a currency format
date - format date to a string based on requested format
limitTo - Can be used to limit the number of rows or character in a string
orderBy - Sorts the data
filter : searchText : exactMatch - Selects a subset of items from an array
Limit - Limits an array or string to a specified number of elements or characters

### Custom Filter
https://www.youtube.com/watch?v=iAS_dkATtVI&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=14&ab_channel=kudvenkat
https://youtu.be/9h8JnTKeJ_8
custom filter is created using filter function of angular module
Ex - convert [0, 1] gender to [Male, Female] gender


## Service in AngularJS
A service in Angular is simply an object that provide some sort of service that can
be reused with in an angular application

built in services
`$http service` - this service is used to make HTTP requests to remote server (like get, post etc services) 
`$log service` - used to log the response object to the console 
`$timeout` - used to run a service after a specified time delay
`$interval` - used to run a service after every specified time (repeat the service)
`$timeout and $interval` - https://youtu.be/jFxPFgGaEqk
``
``


