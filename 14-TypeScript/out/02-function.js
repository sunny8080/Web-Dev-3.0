"use strict";
{
    // Explicitly setting return type
    function add2(n1, n2) {
        return n1 + n2;
    }
    console.log(add2(10, 20)); // 30
    console.log();
}
{
    // void / undefined as return type
    function printResult(num) {
        console.log(num);
    }
    // void as return type
    function printResult2(num) {
        console.log(num);
        // return;
    }
    printResult(10); // 10
    console.log(typeof printResult); // function
    printResult2(50); // 50
    console.log();
}
{
    // Function as type
    function add3(n1, n2) {
        return n1 + n2;
    }
    // let combineValues;
    // let combineValues: Function;
    let combineValues;
    combineValues = add3;
    // combineValues = 5; // Error - as combineValues is of Type Function
    // combineValues = printResult; // Error - as combineValues will accept two number as parameter and returns number
    console.log(combineValues(10, 20)); // 30
    console.log(typeof combineValues); // function
    console.log();
}
{
    // Function types and Callbacks
    function addAndHandle(n1, n2, cb) {
        let result = n1 + n2;
        cb(result);
    }
    addAndHandle(10, 30, (result) => {
        console.log(result);
        // If this callback function return something and it's return type is void then returned value will be ignored
        console.log(result); // 40
    });
    console.log();
}
