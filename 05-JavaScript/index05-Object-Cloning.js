{
    // by Iteration
    let obj1 = {
        a: 20,
        b: "Sunny",
    };

    let obj2 = {};
    for (let key in obj1) {
        obj2[key] = obj1[key];
    }

    obj1.a = 50;

    console.log(obj1); // { a: 50, b: 'Sunny' }
    console.log(obj2); // { a: 20, b: 'Sunny' }
    console.log();
}

{
    // By using asign
    let obj1 = {
        a: 20,
        b: "Sunny",
    };

    let obj2 = { c: 30 };

    let obj3 = Object.assign(obj1); // swallow copy
    let obj4 = Object.assign({}, obj1); // deep copy
    let obj5 = Object.assign({}, obj1, obj2);
    let obj6 = Object.assign({ d: 40 }, obj1, obj2);

    obj1.a = 100;

    console.log(obj1); // { a: 100, b: 'Sunny' }
    console.log(obj2); // { c: 30 }
    console.log(obj3); // { a: 100, b: 'Sunny' }
    console.log(obj4); // { a: 20, b: 'Sunny' }
    console.log(obj5); //{ a: 20, b: 'Sunny', c: 30 }
    console.log(obj6); // { d: 40, a: 20, b: 'Sunny', c: 30 }
    console.log();
}

{
    // using spread
    let obj1 = {
        a: 20,
        b: "Sunny",
    };

    let obj2 = { ...obj1 };

    obj1.a = 50;

    console.log(obj1); //{ a: 50, b: 'Sunny' }
    console.log(obj2); // { a: 20, b: 'Sunny' }
    console.log();
}
