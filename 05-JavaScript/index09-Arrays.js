// Function in JS Arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// concat()
// every()
// filter()
// find()
// findIndex()
// findLast()
// findLastIndex()
// forEach()
// indexOf()
// includes()
// join()
// keys()
// lastIndexOf()
// map()
// pop()
// push()
// reduce()
// reverse()
// shift()
// slice()
// some()
// sort()
// splice()
// unshift()
// values()


// in js, Array is an list that can contain different types of items
{
    let arr1 = [1, 15, 55.56, "Sunny"];
    console.log(arr1); // [ 1, 15, 55.56, 'Sunny' ]
    console.log(arr1[1]); // 15
    console.log(arr1[10]); // undefined

    arr1[10] = 400;
    console.log(arr1[10]); // 400
}

{
    // inserting an element
    let arr2 = [1, 15, 25, 7];
    arr2.push(10); // insert at end
    console.log(arr2); // [ 1, 15, 25, 7, 10 ]   

    arr2.unshift(20); // insert at begin
    console.log(arr2); // [ 20, 1, 15, 25, 7, 10 ]  

    console.log(arr2.splice(2, 1, "a", "b"));
    console.log(arr2); // [ 20, 1, 'a', 'b', 25, 7, 10]

    let arr3 = arr2.concat([100, 200]);
    console.log(arr2); // [ 20, 1, 'a', 'b', 25, 7, 10]
    console.log(arr3); // [ 20, 1, 'a', 'b', 25, 7, 10, 100, 200]
    console.log();
}

{
    // removing element
    let arr1 = [1, 16, 25, 7, 22];

    console.log(arr1.pop()); // 22 // remove from end
    console.log(arr1); // [ 1, 16, 25, 7 ]

    console.log(arr1.shift()); // 1 // remove from begin
    console.log(arr1); // [ 16, 25, 7 ]

    console.log(arr1.splice(1, 1)); // [ 25 ] // remove from middle
    console.log(arr1); // [ 16, 7 ]
    console.log();
}

{
    // emptying an array
    let arr1 = [1, 7, 45, 10];
    let arr2 = arr1; // reference is copied

    // # way 1
    arr1 = []; // not a good way
    console.log(arr1); // []
    console.log(arr2); // [ 1, 7, 45, 10 ]

    // # way 2
    let arr3 = [1, 7, 45, 10];
    let arr4 = arr3;

    arr3.length = 0;
    console.log(arr3); // []
    console.log(arr4); // []

    // # way 3
    let arr5 = [1, 7, 45, 10];
    let arr6 = arr5;

    arr5.splice(0, arr5.length);
    console.log(arr5); // []
    console.log(arr6); // []
    console.log();
}

{
    // iterating
    let arr1 = [4, 78, 78, "SK"];
    console.log(arr1); // [ 4, 78, 78, 'SK' ] 

    for (let x of arr1) console.log(x); // 4 78 78 SK

    arr1.forEach((x) => {
        console.log(x); // 4 78 78 SK
    });
    arr1.forEach((x, ind) => {
        console.log(x); // 4 78 78 SK
    });

    for (let key in arr1) {
        console.log(key, [arr1[key]]); // 0 [ 4 ]    1 [ 78 ] ....
    }
}

{
    let arr3 = [1, 15, 25, 7, 20];
    console.log(arr3); // [ 1, 15, 25, 7, 20 ]
    console.log(arr3.slice(1, 3)); // [ 15, 25 ]
    console.log(arr3.concat(10, 100)); // [ 1, 15, 25, 7, 20, 10, 100 ]
    console.log(arr3.length); // 5
    console.log(arr3.indexOf(15)); // 1
    console.log(arr3.indexOf(10)); // -1
    console.log(arr3.indexOf(15, 3)); // -1 
    console.log(arr3.includes(15)); // true
    console.log(arr3.includes(15, 3)); // false
    console.log(arr3.lastIndexOf(15)); // 1
    console.log(arr3.reverse()); // [ 20, 7, 25, 15, 1 ] 
    console.log(arr3); // [ 20, 7, 25, 15, 1 ]   

    console.log(arr3); // [ 20, 7, 25, 15, 1 ]
    console.log(arr3.fill(5)); // [ 5, 5, 5, 5, 5 ]
    console.log(arr3); // [ 5, 5, 5, 5, 5 ]
    console.log(arr3.fill(9, 1, 3)); // [ 5, 9, 9, 5, 5 ]
    console.log(arr3); // [ 5, 9, 9, 5, 5 ]

    console.log("This is Dog".split(" ")); // [ 'This', 'is', 'Dog' ]   
    console.log([10, 20, 30].join(" : ")); // 10 : 20 : 30

    // spread operator
    let arr4 = [...[1, 2, 3], ...[5.4, 7.8, 9.9]];
    console.log(arr4); // [ 1, 2, 3, 5.4, 7.8, 9.9 ]

    let copyOfarr3 = [...arr3];
    console.log(copyOfarr3); // [ 5, 9, 9, 5, 5 ]
    console.log();
}

{
    // map with arrow function
    let arr1 = [1, 15, 25, 7, 23];
    let arr2 = arr1.map((x) => 2 * x);
    console.log(arr1); // [ 1, 15, 25, 7, 23 ]
    console.log(arr2); // [ 2, 30, 50, 14, 46 ]

    let arr3 = arr1.map((x, ind) => x + ind);
    console.log(arr1); // [ 1, 15, 25, 7, 23 ]
    console.log(arr3); // [ 1, 16, 27, 10, 27 ]

    let arr4 = arr1.map((x, ind, arr) => {
        // console.log(x);
        // console.log(ind);
        // console.log(arr);
        return x;
    });
    console.log(arr4); // [ 1, 15, 25, 7, 23 ]
    console.log();

    // map with callback fun
    let arr5 = [1, 15, 25, 7, 20];
    let callFun1 = (x) => Math.sqrt(x);
    console.log(arr5.map(callFun1)); // [ 1, 3.872983346207417, 5, 2.6457513110645907, 4.47213595499958 ]

    // mapping with inline callback fun
    let arr6 = arr5.map(function (x, ind) {
        return x + ind;
    });
    console.log(arr6); // [ 1, 16, 27, 10, 24 ]

    // map with objects
    const arr7 = [
        { a: 2, b: 2 },
        { a: 5, b: 3 },
        { a: 10, b: 100 },
    ];
    let arr8 = arr7.map(({ a, b }) => ({ [a]: b }));
    let arr9 = arr7.map(({ a, b }) => a + b);
    console.log(arr7); // [ { a: 2, b: 2 }, ... ]
    console.log(arr8); // [ { '2': 2 }, { '5' : 3 }, ...]
    console.log(arr9); // [ 4, 8, 10]
    console.log();

    // method chaining 
    // filter method
    let nums = [10, 20, 30, -41, -45, 50];
    let items = nums
        .filter((x) => x >= 0)
        .map((y) => {
            return { val: y };
        });
    console.log(items); // [ { val: 10 }, { val: 20 }, { val: 30 }, { val: 50 } ]
    console.log();
}

{
    let arr1 = [1, 16, 25, 7, 22];

    console.log(arr1.filter((x, ind) => x % 2 == 0)); // [ 16 22 ]
    arr1.forEach((x, ind) => {
        if (x % 2) console.log(x);
    }); // 1 25 7

    console.log(arr1.every((x, ind) => x >= 0)); // true

    // Default sort is done on converting to string
    console.log(arr1.sort()); // [ 1, 16, 22, 25, 7 ]

    arr1.sort((a, b) => a - b);
    console.log(arr1);  // [ 1, 7, 16, 22, 25 ]
    arr1.sort((a, b) => b - a);
    console.log(arr1); // [ 25, 22, 16, 7, 1 ]

    for (let x of arr1) console.log(x); // 25 22 16 7 1
    for (let x of arr1.keys()) console.log(x, arr1[x]); // 0 25    1 22   3 7 ...

    console.log(arr1); // [ 25, 22, 16, 7, 1 ]

    console.log(arr1.find((x, ind) => x % 2 == 0)); // 22
    console.log(arr1.findIndex((x, ind) => x % 2 == 0)); // 1

    console.log(arr1.find((x, ind) => x === 12345)); // undefined
    console.log(arr1.findIndex((x, ind) => x === 12345)); // -1
    console.log();
}

{
    // callback or predicate function
    let courses = [
        { roll: 1, name: "Alok" },
        { roll: 2, name: "Pawan" },
        { roll: 3, name: "Sunny" },
        { roll: 4, name: "Satyam" },
        { roll: 5, name: "Sunny" },
    ];

    // console.log(courses.indexOf({name: "Sunny"})); // -1 // it won't work

    // 1st way
    let callback = function (course) {
        return course.name === "Sunny";
    };
    let ans1 = courses.find(callback);
    console.log(ans1); // { roll: 3, name: 'Sunny' }

    // 2nd way
    let ans2 = courses.find(function (course) {
        return course.name === "Sunny";
    });
    console.log(ans2); // { roll: 3, name: 'Sunny' }

    // 3rd way - by arrow function
    let ans3 = courses.find((course) => course.name === "Sunny");
    console.log(ans3); // { roll: 3, name: 'Sunny' }

    console.log(courses.findIndex((course) => course.name === "Sunny"));
    console.log(); // 2
}

{
    // reducing an array
    let arr1 = [100, 200, 300];
    let sum = arr1.reduce((prev, cur) => prev + cur, 10);
    console.log(sum); // 610

    // when we don't give initial value, first value is assumed to be initial value, and accumulator (or process starts from the second value)
    console.log(arr1.reduce((prev, cur) => prev + cur)); // 600

    let maxi = arr1.reduce((prev, cur) => Math.max(prev, cur), Number.MIN_VALUE);
    console.log(maxi); // 300
    console.log();
}
