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
{
    // arrow function
    // const add = (a: number, b:number)=>{
    //   return a+b;
    // }
    // arrow with Default value
    const add = (a = 100, b = 50) => a + b;
    console.log(add(10, 20)); // 30
    console.log(add(10)); // 60
    console.log(add(undefined, 10)); // 110
    console.log(add()); // 150
    const printL = (x) => console.log(x);
    printL('Sunny'); // Sunny
    console.log();
}
{
    // Spread operator
    const names = ['sdf', 'Sunny', 'sdf54', 45];
    console.log(names); // [ 'sdf', 'Sunny', 'sdf54', 45 ]
    console.log(...names); // sdf Sunny sdf54 45
    const person = {
        name: 'Sunny',
        age: 25,
    };
    const person1 = person; // copied by reference
    const person2 = Object.assign({}, person); // copied by value
    person.name = 'Alok';
    console.log(person); // { name: 'Alok', age: 25 }
    console.log(person1); // { name: 'Alok', age: 25 }
    console.log(person2); // { name: 'Sunny', age: 25 }
    console.log();
}
{
    // rest parameters
    const addAll = (a, ...nums) => {
        return a + nums.reduce((cur, val) => cur + val, 0);
    };
    console.log(addAll(10)); // 10
    console.log(addAll(10, 20)); // 30
    console.log(addAll(10, 20, 30, 10, 20)); // 90
    const maxIn3 = (...nums) => {
        return Math.max(nums[0], nums[1], nums[2]);
    };
    console.log(maxIn3(10, 30, 20)); // 30
    // console.log(maxIn3(10, 30, 20, 20)); // Error
    console.log();
}
{
    // Array/Object destructing
    const names = ['ab', 'cd', 'fdfd', 'dfdf'];
    const [name1, name2, ...remain] = names;
    console.log(name1); // ab
    console.log(name2); // cd
    console.log(remain); // [ 'fdfd', 'dfdf' ]
    const person = {
        firstName: 'sunny',
        age: 25,
    };
    const { firstName: userName, age } = person;
    console.log(userName); // sunny
    console.log(age); // 25
    console.log();
}
{
    // switch in ts
    function checkString(str) {
        switch (str) {
            case 'abc':
                console.log('abc sent');
                break;
            case 'xyz':
                console.log('xyz sent');
                break;
            default:
                console.log('other string sent');
                break;
        }
    }
    checkString('abc'); // abc sent
    checkString('xyz'); // xyz sent
    checkString('msg'); // other string sent
    console.log();
    const isEven = (x) => {
        let result;
        switch (x % 2 == 0) {
            case true:
                result = true;
                break;
            case false:
                result = false;
                break;
        }
        return result;
    };
    console.log(isEven(20)); // true
    console.log(isEven(21)); // false
    console.log();
}
