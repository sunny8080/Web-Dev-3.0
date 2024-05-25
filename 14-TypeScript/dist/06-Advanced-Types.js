"use strict";
var _a;
{
    const a = 20;
    const b = 'ABC';
    console.log(a); // 20
    console.log(b); // ABC
    console.log();
}
{
    let x = 10;
    // let x: Universal = "10"; // Error
    console.log(typeof x); // number
    console.log();
}
{
    const sa1 = {
        name: 'Sunny',
        startDate: new Date(),
        privileges: ['AWS'],
    };
    console.log(typeof sa1); // object
    console.log(sa1); // { name: 'Sunny' ... }
    console.log();
    function printEmpInfo(emp) {
        console.log(emp.name);
        // In js, typeof emp will always be object and not out custom type
        // if (typeof emp === 'Admin') {
        //   console.log(emp.privileges);
        // }
        if ('privileges' in emp) {
            console.log(emp.privileges);
        }
        if ('startDate' in emp) {
            console.log(emp.startDate);
        }
    }
    printEmpInfo(sa1); // Sunny ['AWS'] 2024...
    const emp1 = {
        name: 'Alok',
        startDate: new Date(),
    };
    printEmpInfo(emp1); // Alok 2024...
    console.log();
}
{
    function combine(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        else
            return a + b;
    }
    console.log(combine(10, '20')); // 1020
    console.log();
}
{
    // Type guards ex
    class Car {
        drive() {
            console.log('Driving ....');
        }
    }
    class Truck {
        drive() {
            console.log('Driving ....');
        }
        loadCargo() {
            console.log('Loading Cargo ... ');
        }
    }
    function useVehicle(v) {
        v.drive();
        if (v instanceof Truck) {
            v.loadCargo();
        }
    }
    const c1 = new Car();
    const t1 = new Truck();
    useVehicle(c1); // Driving ....
    useVehicle(t1); // Driving ....   Loading Cargo ...
    console.log();
}
{
    function moveAnimal(animal) {
        let speed;
        switch (animal.objType) {
            case 'bird':
                speed = animal.flyingSpeed;
                break;
            case 'horse':
                speed = animal.runningSpeed;
        }
        console.log('Moving speed =', speed);
    }
    moveAnimal({ objType: 'bird', flyingSpeed: 30 }); // Moving speed = 30
    moveAnimal({ objType: 'horse', runningSpeed: 40 }); // Moving speed = 40
    console.log();
}
{
    // Typecasting
    // const abc = myFun(45)!; // This (!) means abc will never be null
    // const userInputEle = document.getElementById('user-input'); // Error on setting value
    // const userInputEle = document.getElementById('user-input')!; // Error on setting value
    // const userInputEle = <HTMLInputElement>document.getElementById('user-input')!; // can't use in jsx or tsx
    // Commenting so that no error will come on compile and run
    // const userInputEle = document.getElementById('user-input')! as HTMLInputElement;
    // userInputEle.value = 'Hello World';
    console.log();
}
{
    const error1 = {
        email: 'Not a valid email!',
    };
    const error2 = {
        userName: 'Must start with capital character',
    };
    const error3 = {
        email: 'Not a valid email!',
        userName: 'Must start with capital character',
        password: 'password is incorrect',
    };
    console.log(error1); // { email: 'Not a valid email!' }
    console.log();
}
{
    function add(a, b) {
        return a + b;
    }
    console.log(add('ab', 'cd')); // abcd
    console.log(add(10, 20)); // 30
    console.log();
    function combine(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        else
            return a + b;
    }
    console.log(combine(10, '20')); // 1020
    console.log(combine(10, 20)); // 30
    console.log(typeof combine(20, 30)); // number
    console.log();
}
{
    // Optional chaining
    // it helps when we are getting data from other sources like from some file or from some api response
    const userData = {
        id: 'kac002',
        name: 'Sunny',
        address: { city: 'Kolkata', state: 'West bengal' },
    };
    // console.log(userData.address.city);
    console.log((_a = userData === null || userData === void 0 ? void 0 : userData.address) === null || _a === void 0 ? void 0 : _a.city); // it avoids run time errors
    // console.log(userData.dob); // can cause run time errors
    // console.log(userData?.dob);
    console.log();
}
{
    // Nullish Coalescing
    const userInput = '';
    const userInput2 = null;
    const userName1 = userInput || 'Default';
    const userName2 = userInput !== null && userInput !== void 0 ? userInput : 'Default';
    const userName3 = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'Default2';
    console.log(userName1 + ' 111'); // Default 111
    console.log(userName2 + ' 222'); // 222
    console.log(userName3); // Default2
    console.log();
}
