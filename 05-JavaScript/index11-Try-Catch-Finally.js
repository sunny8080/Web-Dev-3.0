// mdn : //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
https: {
    try {
        let d = 0;
        if (d == 0) {
            throw new Error("Division by Zero");
        }
        let x = 5 / d;
        console.log(x);
    } catch (e) {
        // console.log(e); // Error message with call stack of error
        console.log("Error : " + e); // Error : Error: Division by Zero
    }
}
