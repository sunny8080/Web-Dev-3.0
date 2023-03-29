console.log("Hello Sunny"); // Hello Sunny // used to print on the console window

{
    // console.log("i am alert"); // i am alert
    // prompt("i am alert");
    // alert("i am alert");
}

{
    // primitive data types
    // Number String boolean undefined null bigint symbol
    // in js float or double doesn't exist
    let a1 = 10;
    let a2 = 10.2; // this is also a number variable
    let a3 = "Hello Sunny";
    let a4 = "Hello sunny";
    let a5 = true;
    let a6;
    let a7 = null;
    let a8 = 12345678910111213n; // (end with 'n')

    console.log(a1); // 10
    console.log(a2); // 10.2
    console.log(a3); // Hello Sunny
    console.log(a4); // Hello Sunny
    console.log(a5); // true
    console.log(a6); // undefined
    console.log(a7); // null
    console.log(a8); // 12345678910111213

    console.log(a1 + 10); // 20
    console.log(a1 + 10 + "ABCD"); // 20ABCD
    console.log("XYZ" + a1 + 10 + "ABCD"); // XYZ1010ABCD
    console.log(a5 + 10); // 11

    console.log(a1 + 10); // 20.2
    console.log(a1 + a2); // 20.2
    console.log(a1, a2); // 10 10.2

    console.log(typeof a1); // number
    console.log(typeof a2); // number
    console.log(typeof a8); // bigint

    let a10 = 1234;
    // let a10 = 545; // Error, can't declare again
    var var1 = 500;
    var var1 = 456; // variable with var, it is allowed to declare again
    const a11 = "ssss";
    // a11 = "aa"; // Error

    console.log(var1); // 456
    console.log(a11); // ssss
}

{
    // console.log(a10); // Error, block level scope
    console.log(var1); // 456 // variable with var, will be alive till program end

    // in js naming, camerCase is used
    // let var = 5; // Js don't allow keyword as variable name
}

{
    // dynamic typing
    let a1 = 5;
    console.log(a1); // 5 // Number

    a1 = "Sunny";
    console.log(a1); // Sunny // String
}

{
    // Referece types - Objects, Arrays, Function

    // Objects or object literals,
    let person = {
        firstName: "Sunny", // key-value pairs or properties
        age: 23,
    };

    console.log(person.firstName); // Sunny
    console.log(person["firstName"]); // Sunny
    console.log(person.age); // 23
    console.log(person["age"]); // 23

    // Arrays : Data str used to contain list of items, item can be of diff types
    let arr1 = [4, "abc", 45.4];
    console.log(arr1); // [4, "abc", 45.4]

    console.log(arr1[0]); // 4
    console.log(arr1[3]); // undefined

    arr1[1] = 100;
    arr1[3] = "Kumar";
    arr1[10] = "pqr";
    console.log(arr1[1]); // 100
    console.log(arr1[3]); // kumar
    console.log(arr1[4]); // undefined
    console.log(arr1[10]); // pqr
}

{
    // Operators : + - * / += -= *= /= % = typeof instanceof ++ --  **
    // > < >= <= == != (Loose equality) !== === (Strict equality)
    // Loose quality (==) : to be true, only Value must be same, it doesn't check equality
    // Strict quality (==) : to be true, Data type and Value must be same
    // Ternary operator : cond ? val1 : val2
    // AND OR NOT : && || !
    // Bitwise AND OR NOT : & | ~
    // To check a property is present in class or not : in

    console.log(2 * 3); //
    console.log(2 ** 3); //
    console.log(2 > 3); // false
    console.log(2 == "2"); // true
    console.log(2 === "2"); // false
    console.log(2 != "2"); // false
    console.log(2 !== "2"); // true

    console.log(5 == 5 ? "SK" : "XYZ"); // SK

    console.log(true && false); // true
    console.log(!true); // false
    console.log(5 == "0" && 3); // false
    console.log(5 & 3); // 4
    console.log(~3); // -4

    // with non boolean values
    // falsy values : undefined, null, 0, false,'', NaN
    // truthy values : anything except falsy vals
    console.log(false || 5 || 3); // 5
    console.log(false || "Sunny"); // Sunny
    console.log(undefined || "Sunny"); // Sunny
    console.log("ABC" || "Sunny"); // ABC
}

{
    // operator precedence
    console.log(2 * 4 + 5); // 13
    console.log(2 * 4 + 5); // 13
}

{
    // scope
    // variable defined using let and const, have scope to the closest block
    // variable defined using var, have scope to the closet function block if it is defined in a fun
    // variable defined using var, have scope to the whole file if it is not defined in ant fun

    {
        let a = 10;
        const ab = 100;
        var b = 20;
        console.log(a); // 10
        console.log(ab); // 100
        console.log(b); // 20
    }
    // console.log(a); // Error
    // console.log(ab); // Error
    console.log(b); // 20

    function abc() {
        var c = 10;
        console.log(c);
    }
    abc(); // 10
    // console.log(c); // Error
}
