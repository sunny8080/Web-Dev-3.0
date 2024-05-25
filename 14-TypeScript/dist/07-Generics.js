"use strict";
{
    // Generic Type
    // let names: string[] = [];
    let names = [];
    // Another ex
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is done');
        }, 2000);
    });
    // promise.then((data) => {
    //   console.log(data.length); // 12
    //   console.log(data); // This is done
    // });
    console.log();
}
{
    // function with generic type
    // function merge<T, U>(objA: T, objB: U) {
    //   return Object.assign({}, objA, objB);
    // }
    // using {} as first argument to assign, typescript ensure that return type is object with intersection of T and U
    function merge(objA, objB) {
        return Object.assign({}, objA, objB);
    }
    // restrict type of T and U
    // no need of {} as first argument to assign, as ts knows T and U will be object
    function merge2(objA, objB) {
        return Object.assign(objA, objB);
    }
    console.log(merge({ name: 'abc' }, { age: 30 })); // { name: 'abc', age: 30 }
    console.log(merge({ name: 'abc', hobbies: ['cricket'] }, { age: 30 })); // { name: 'abc', hobbies: [ 'cricket' ], age: 30 }
    console.log(merge({ name: 'abc' }, { name: 'xyz', age: 30 })); // { name: 'xyz', age: 30 }
    console.log(merge(2, 4)); // {} // because 2 and 4 is not a object
    // console.log(merge2(2, 4)); // Error, as 2 and 4 are not object
    // const mergedObj = merge<{name:string}, {age:number}>({ name: 'abc' }, { age: 30 });
    const mergedObj = merge({ name: 'abc' }, { age: 30 });
    console.log(mergedObj.age); // 30
    console.log(mergedObj.name); // abc
    console.log();
}
{
    function countAndDescribe(ele) {
        let descriptionTxt = '';
        if (ele.length == 0) {
            descriptionTxt = 'Got no value';
        }
        else if (ele.length == 1) {
            descriptionTxt = 'Got 1 elements';
        }
        else if (ele.length > 1) {
            descriptionTxt = `Got ${ele.length} elements`;
        }
        return [ele, descriptionTxt];
    }
    console.log(countAndDescribe('')); // [ '', 'Got no value' ]
    console.log(countAndDescribe('Hello')); // [ 'Hello', 'Got 5 elements' ]
    console.log(countAndDescribe(['abc', 'xyz', 45])); // [ [ 'abc', 'xyz', 45 ], 'Got 3 elements' ]
    console.log();
}
{
    // keyof Constraint
    function extractAndConvert(obj, key) {
        return 'Value ' + obj[key];
    }
    // console.log(extractAndConvert({}, 'name')); // Error, as name is not key of {}
    console.log(extractAndConvert({ name: 'Sunny' }, 'name')); // Value Sunny
    console.log();
}
{
    // Generic Classes
    class myArray {
        constructor() {
            this.data = [];
        }
        addItems(x) {
            this.data.push(x);
        }
        removeItem(x) {
            if (this.data.indexOf(x) !== -1) {
                this.data.splice(this.data.indexOf(x), 1);
                return true;
            }
            return false;
        }
        getItems() {
            return this.data;
        }
    }
    let arr1 = new myArray();
    arr1.addItems(10);
    arr1.addItems(25);
    console.log(arr1.getItems()); // [ 10, 25 ]
    arr1.removeItem(10);
    console.log(arr1.getItems()); // [ 25 ]
    // union types
    let arr2 = new myArray();
    arr2.addItems('Abc');
    arr2.addItems('qqq');
    console.log(arr2.getItems()); // [ 'Abc', 'qqq' ]
    // object types - go through carefully
    let arr3 = new myArray();
    arr3.addItems({ name: 'Abc', age: 20 });
    arr3.addItems({ name: 'asd', age: 25 });
    console.log(arr3.getItems()); // [ { name: 'Abc', age: 20 }, { name: 'asd', age: 25 } ]
    // arr3.removeItem({ name: 'Abc', age: 20 }); // may not give correct result, as object are reference type
    // console.log(arr3.getItems()); //
    const obj1 = { name: 'AAa', age: 30 };
    arr3.addItems(obj1);
    console.log(arr3.getItems()); // [ { name: 'Abc', age: 20 }, { name: 'asd', age: 25 }, { name: 'AAa', age: 30 } ]
    arr3.removeItem(obj1);
    console.log(arr3.getItems()); // [ { name: 'Abc', age: 20 }, { name: 'asd', age: 25 } ]
    console.log();
}
{
    // generic class - another ex
    // extending specific data types
    class myGenClass {
        constructor() {
            this.data = [];
        }
        addItem(x) {
            this.data.push(x);
        }
        getItems() {
            return this.data;
        }
    }
    let arr2 = new myGenClass();
    // let arr3 = new myGenClass<object>(); // Error
    console.log();
}
{
    function createCourseGoal(title, desc, date) {
        // let courseGoal: CourseGoal = {}; // Error, ts will not allow to create obj like this
        let courseGoal = {};
        courseGoal.title = title;
        courseGoal.description = desc;
        courseGoal.completeUntil = date;
        return courseGoal;
    }
    console.log(createCourseGoal('Learn Js', 'Js in 30 days', new Date())); // { title: 'Learn Js' ... }
    console.log();
}
{
    // built in utility types
    // Readonly<T> : Make all properties in T readonly
    const names = ['Sunny', 'Alok'];
    // names.push('Abcd'); // Error
    console.log(names); // [ 'Sunny', 'Alok' ]
    console.log();
}
