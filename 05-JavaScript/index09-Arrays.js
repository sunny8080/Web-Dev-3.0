// in js, Array is an list that can contain different types of items
{
    let arr1 = [1, 15, 55.56, "Sunny"];
    console.log(arr1);
    console.log(arr1[1]); // 15
    console.log(arr1[10]); // undefined

    arr1[10] = 400;
    console.log(arr1[10]); // 400
}

{
    // inserting an element
    let arr2 = [1, 15, 25, 7];
    arr2.push(10); // insert at end
    console.log(arr2); //

    arr2.unshift(20);
    console.log(arr2); //

    console.log(arr2.splice(2, 1, "a", "b"));
    console.log(arr2);

    let arr3 = arr2.concat([100, 200]);
    console.log(arr2);
    console.log(arr3);
    console.log();
}

{
    // removing element
    let arr1 = [1, 16, 25, 7, 22];

    console.log(arr1.pop()); // remove from begin
    console.log(arr1);

    console.log(arr1.shift()); // remove from end
    console.log(arr1);

    console.log(arr1.splice(1, 1)); // remove from middle
    console.log(arr1);
    console.log();
}

{
    // emptying an array
    let arr1 = [1, 7, 45, 10];
    let arr2 = arr1; // reference is copied

    // # way 1
    arr1 = []; // not a good way
    console.log(arr1);
    console.log(arr2);

    // # way 2
    let arr3 = [1, 7, 45, 10];
    let arr4 = arr3;

    arr3.length = 0;
    console.log(arr3);
    console.log(arr4);

    // # way 3
    let arr5 = [1, 7, 45, 10];
    let arr6 = arr5;

    arr5.splice(0, arr5.length);
    console.log(arr5);
    console.log(arr6);
    console.log();
}

{
    // iterating
    let arr1 = [4, 78, 78, "SK"];
    console.log(arr1);

    for (let x of arr1) console.log(x);

    arr1.forEach((x) => {
        console.log(x);
    });
    arr1.forEach((x, ind) => {
        console.log(x);
    });

    for (let key in arr1) {
        console.log(key, [arr1[key]]);
    }
}

{
    let arr3 = [1, 15, 25, 7, 20];
    console.log(arr3); //
    console.log(arr3.slice(1, 3));
    console.log(arr3.concat(10, 100));
    console.log(arr3.length);
    console.log(arr3.indexOf(15));
    console.log(arr3.indexOf(10));
    console.log(arr3.indexOf(15, 3));
    console.log(arr3.includes(15));
    console.log(arr3.includes(15, 3));
    console.log(arr3.lastIndexOf(15));
    console.log(arr3.reverse());
    console.log(arr3);

    console.log(arr3);
    console.log(arr3.fill(5));
    console.log(arr3);
    console.log(arr3.fill(5, 1, 3));
    console.log(arr3);

    console.log("This is Dog".split(" "));
    console.log([10, 20, 30].join(" : "));

    // spread operator
    let arr4 = [...[1, 2, 3], ...[5.4, 7.8, 9.9]];
    console.log(arr4);

    let copyOfarr3 = [...arr3];
    console.log(copyOfarr3);
    console.log();
}

{
    // map with arrow function
    let arr1 = [1, 15, 25, 7, 23];
    let arr2 = arr1.map((x) => 2 * x);
    console.log(arr2);
    console.log(arr1);

    let arr3 = arr1.map((x, ind) => x + ind);
    console.log(arr3);
    console.log(arr1);

    let arr4 = arr1.map((x, ind, arr) => {
        // console.log(x);
        // console.log(ind);
        // console.log(arr);
        return x;
    });
    console.log(arr4);

    // map with callback fun
    let arr5 = [1, 15, 25, 7, 20];
    let callFun1 = (x) => Math.sqrt(x);
    console.log(arr5.map(callFun1));

    // mapping with inline callback fun
    let arr6 = arr5.map(function (x, ind) {
        return x + ind;
    });
    console.log(arr6);

    // map with objects
    const arr7 = [
        { a: 2, b: 2 },
        { a: 5, b: 3 },
        { a: 10, b: 100 },
    ];
    let arr8 = arr7.map(({ a, b }) => ({ [a]: b }));
    let arr9 = arr7.map(({ a, b }) => a + b);
    console.log(arr7);
    console.log(arr8);
    console.log(arr9);
    console.log();

    // method chaining 
    // filter method
    let nums = [10, 20, 30, -41, -45, 50];
    let items = nums
        .filter((x) => x >= 0)
        .map((y) => {
            return { val: y };
        });
    console.log(items);
}

{
    let arr1 = [1, 16, 25, 7, 22];

    console.log(arr1.filter((x, ind) => x % 2 == 0));
    arr1.forEach((x, ind) => {
        if (x % 2) console.log(x);
    });

    console.log(arr1.every((x, ind) => x >= 0));

    // Default sort is done on converting to string
    console.log(arr1.sort());

    arr1.sort((a, b) => a - b);
    console.log(arr1);
    arr1.sort((a, b) => b - a);
    console.log(arr1);

    for (let x of arr1) console.log(x);
    for (let x of arr1.keys()) console.log(x, arr1[x]);

    console.log(arr1);

    console.log(arr1.find((x, ind) => x % 2 == 0));
    console.log(arr1.findIndex((x, ind) => x % 2 == 0));
    console.log();
}

{
    // callback or predeicate function
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
    console.log(ans1);

    // 2nd way
    let ans2 = courses.find(function (course) {
        return course.name === "Sunny";
    });
    console.log(ans2);

    // 3rd way - by arrow function
    let ans3 = courses.find((course) => course.name === "Sunny");
    console.log(ans3);

    console.log(courses.findIndex((course) => course.name === "Sunny"));
    console.log();
}

{
    // reducing an array
    let arr1 = [100, 200, 300];
    let sum = arr1.reduce((prev, cur) => prev + cur, 10);
    console.log(sum);

    // when we don't give initial value, first value is assumed to be initial value, and accumulator (or process starts from the second value)
    console.log(arr1.reduce((prev, cur) => prev + cur)); // 600

    let maxi = arr1.reduce((prev, cur) => Math.max(prev, cur), Number.MIN_VALUE);
    console.log(maxi);
    console.log();
}
