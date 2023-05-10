// Loops :-
// for loop
// while loop
// do-while loop
// for-in loop
// for-of loop

{
    // for loop
    for (let i = 0; i < 5; i++) {
        console.log(i); // 0 1 2 3 4
    }
    console.log();
}

{
    // while loop
    let i = 0;
    while (i < 5) {
        console.log(i); //  0 1 2 3 4
        i++;
    }
    console.log();
}

{
    // do-while loop
    let i = 0;
    do {
        console.log(i); //  0 1 2 3 4
        i++;
    } while (i < 5);
    console.log();
}

{
    // for-in loop
    let rect = {
        length: 10,
        breadth: 20,
    };

    // keys are reflected through key variable
    // values are reflected through rect[key]
    for (let key in rect) {
        console.log(key, rect[key]); // length 10, breadth 20
    }
    console.log();
}

{
    // for-of loop
    // it can be used only in iterable objects, like array, map
    let arr1 = [10, 20, 30];
    for (let x of arr1) {
        console.log(x); // 10 20 30
    }

    // for-in in array
    for (let key in arr1) {
        console.log(key, arr1[key]); // 0 10, 1 20, 2 30
    }

    console.log();

    let rect = {
        length: 10,
        breadth: 20,
    };

    // for (let x of rect) { // Error
    //     console.log(rect);
    // }

    for (let key of Object.keys(rect)) {
        console.log(key, rect[key]); // length 10, breadth 20
    }
    for (let key of Object.entries(rect)) {
        console.log(key); // [ 'length', 10 ], [ 'breadth', 20]
    }
    console.log();
}
