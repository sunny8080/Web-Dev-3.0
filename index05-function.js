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
