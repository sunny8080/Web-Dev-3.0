{
    // we can declare fun anywhere, and call it from anywhere
    // this is done by hoisting, it is process of moving function declaration to top of the file, done automatically by JS engine
    // hoisting shift only function declaration, and not the assignment
    drive(); // Driving

    // function declaration
    function drive() {
        console.log("Driving");
    }

    drive(); // Driving
    console.log();
}

{
    drive(); // Driving // we can call it from other block also

    // run(); // Error // as hoisting shift only function declaration, and not the assignment

    // Named Function assignment
    let run = function run() {
        console.log("Running");
    };

    run(); // Running

    let xyz = run;
    xyz(); // Running
    run(); // Running

    // Anonymous Function assignment
    let run2 = function () {
        console.log("Running2");
    };
    run2(); // Running2

    console.log();
}

{
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(5, 4));
    console.log(sum(5)); // NaN
    console.log(sum()); // Nan
    console.log(sum(5, 4, 1, 2, 3)); //
    console.log(sum("ab", "XYZ")); // abXYZ
    console.log();
}

{
    // arguments -> it is an object and not the array
    function sum2(a, b) {
        console.log(arguments);
        return a + b;
    }

    sum2(10, 20, 1, 2, 3); // [Arguments] { '0': 10, '1': 20, '2': 1, '3': 2, '4': 3 }

    function sum3() {
        let total = 0;
        for (let val of arguments) total += val;
        return total;
    }

    console.log(sum3()); // 0
    console.log(sum3(5)); // 5
    console.log(sum3(5, 10)); // 15
    console.log(sum3(1, 2, 3, 4, 5)); // 15
    console.log();
}

{
    // rest operator (...) -> rest parameter must be last parameter
    // args -> here args will be array (not the object like arguments)
    function fun1(a, b, ...args) {
        console.log(a, b, args);
    }

    fun1(10, 20, 100, 200, 500); // 10 20 [100, 200, 500]
    console.log();
}

{
    // Defualt parameter -> it must be last parameter in the inputs
    function fun2(a, b, c = 0) {
        console.log(a, b, c);
    }

    fun2(10, 20, 30); // 10 20 30
    fun2(10, 20); // 10 20 0

    // hack
    function fun3(a, b = 88, c) {
        console.log(a, b, c);
    }

    fun3(10, 20, 100); // 10 20 100
    fun3(10, undefined, 100); // 10 88 100
    console.log();
}

{
    // getter setter
    let person = {
        fName: "Sunny",
        lName: "Kumar",
        get fullName() {
            return this.fName + " " + this.lName;
        },

        // set setFName(fName) {
        // this.fName = fName;
        // },
        set fullName(val) {
            let parts = val.split(" ");
            this.fName = parts[0];
            this.lName = parts[1];
        },
    };

    // console.log(person.fullName()); // Error // fullName is a properties and not a function
    console.log(person.fullName);

    person.fullName = "Rahul Kumar";
    console.log(person.fullName);
    console.log();
}

{
    function sum1(a, b) {
        return a + b;
    }

    let sum2 = function (a, b) {
        return a + b;
    };

    console.log(sum1(10, 20)); // 30
    console.log(sum2(10, 20)); // 30

    console.log(sum1.name); // sum
    console.log(sum2.name); // sum

    console.log();
}

{
}

{
    // primitive data types vs reference data types
    // primitive are copied by their value
    // Reference are copied by their address / refernce
    let a = 20;
    let b = a;
    a += 5;
    console.log(a); // 25
    console.log(b); // 20

    let x = { val: 20 };
    let y = x; //
    x.val += 5;
    console.log(x.val); // 25
    console.log(y.val); // 25
    console.log();
}

{
    let a = 10;

    // primitive are passed by their value
    function inc(a) {
        a += 5;
        console.log(a);
    }
    inc(a); // 15
    console.log(a); // 10
    console.log();
}

{
    let a = { val: 10 };
    function inc(a) {
        a.val += 5;
        console.log(a.val); // 15
    }
    inc(a);
    console.log(a.val); // 15
    console.log();
}
