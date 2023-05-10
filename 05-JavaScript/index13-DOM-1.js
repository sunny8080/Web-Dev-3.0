{
    // Measure performance
    /*
    // adding 100para
    const t1 = performance.now();
    for (let i = 1; i <= 100; i++) {
        let newElement = document.createElement("p");
        newElement.textContent = "This is Para " + i;

        document.body.appendChild(newElement);
    }
    const t2 = performance.now();
    console.log("this took " + (t2 - t1) + " ms");

    // optimising a bit
    const t3 = performance.now();
    let myDiv = document.createElement("div");
    for (let i = 1; i <= 100; i++) {
        let element = document.createElement("p");
        element.textContent = "This is Para " + i;
        myDiv.appendChild(element);
    }
    document.body.appendChild(myDiv);
    const t4 = performance.now();
    console.log("this took " + (t4 - t3) + " ms");

    // optimising using document fragment object
    const t5 = performance.now();
    let fragment = document.createDocumentFragment();
    for (let i = 1; i <= 100; i++) {
        let newElement = document.createElement("p");
        newElement.textContent = "This is Para " + i;

        fragment.appendChild(newElement);
    }
    document.body.appendChild(fragment); // 1 Reflow, 1 Repaint
    const t6 = performance.now();
    console.log("this took " + (t6 - t5) + " ms");
    */
}

{
    // call stack
    /*
    function addPara() {
        let para = document.createElement("p");
        para.textContent = "Js is Single";
        document.body.appendChild(para);
    }

    function appendNewMessage() {
        let para = document.createElement("p");
        para.textContent = "Kya haal Chaal";
        document.body.appendChild(para);
    }

    addPara();
    appendNewMessage();
    */
}

{
    // async code
    /*
    setTimeout(function () {
        console.log("third");
    }, 3000);
    
    function sync() {
        console.log("first");
    }

    sync();
    console.log("second"); // first second third
    */
}

{
    // promise
    /*
    let meraPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("I am insde Promise1");
        }, 5000);

        //resolve(1234567890);
        reject(new Error("Bhaisahab Error aaaye hai"));
    });
    console.log("Pehla");
    */
}

{
    // parallel promise
    /*
    let meraPromise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("I am insde Promise1");
        }, 5000);
        //resolve(1234567890);
        // reject(new Error("Bhaisahab Error aaaye hai"));
    });

    let meraPromise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("I am insde Promise2");
        }, 3000);
        //resolve(2233);
        //reject(new Error('Bhaisahab Error aaaye hai'))
    });
    console.log("Pehla");
    */
}

{
    // then() and catch()
    /*
    let meraPromise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("I am insde Promise1");
        }, 5000);
        //resolve(1234567890);
        reject(new Error("Bhaisahab Error aaaye hai"));
    });

    // meraPromise1.then((value) => { console.log(value)});
    // meraPromise1.catch((error) => { console.log("Recieved an Error")});
    meraPromise1.then(
        (value) => {
            console.log(value);
        },
        (error) => {
            console.log("Recieved an Error");
        }
    );

    let meraPromise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("I am insde Promise2");
        }, 3000);
        //resolve(2233);
        //reject(new Error('Bhaisahab Error aaaye hai'))
    });

    console.log("Pehla");
    */
}

{
    // multiple promise and promise chaining
    /*
    let waadaa1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("setimeout1 started");
        }, 2000);
        resolve(true);
    });

    let output = waadaa1.then(() => {
        let waadaa2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log("setimeout2 started");
            }, 3000);
            resolve("waada 2 resolved");
        });
        return waadaa2;
    });

    output.then((value) => console.log(value));
    */
}

{
    // async function :- async funtion always returns promise
    /*
    async function abcd() {
        return "kya hua tera";
    }
    abcd(); // return a promise
    */
}

{
    // async :  async keyword indicates that the function will return a promise
    // await :- wait for promises to resolve before continuing execution
    /*
    async function utility() {
        let delhiMausam = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Delhi me bhot garmi hai");
            }, 5000);
        });

        let hydMausam = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hyderabad is Cool");
            }, 6000);
        });

        let dM = await delhiMausam; // execution stops here, and wait for end of delhiMausam promise to fulfill
        let hM = await hydMausam;
        return [dM, hM];
    }
    utility();
    */
}

{
    // fetch get api
    /*
    async function utility() {
        let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let output = await content.json();
        // console.log(content);
        console.log(output);
    }
    utility();
    */
}

{
    // fetch post api
    /*
    async function helper() {
        let options = {
            method: "POST",
            body: JSON.stringify({
                title: "Sunny",
                body: "My name is Sunny ",
                userId: 123,
                weight: 70,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };

        let content = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        let response = content.json();
        return response;
    }

    async function utility() {
        let ans = await helper();
        console.log(ans);
    }

    utility();
    */
}

{
    // Closure in js : clousure binds a function to its required data with references, and required data is called lexical environment
    function abcd() {
        var name = "Mozilla"; // name is a local variable created by abcd
        function displayName() {
            // displayName() is the inner function, that forms the closure
            console.log(name); // use variable declared in the parent function
        }
        displayName();
    }
    abcd(); // Mozilla
}

{
    function abcd() {
        let name = "Mozilla";
        function displayName() {
            // displayName() is the inner function, that forms the closure
            console.log(name); // use variable declared in the parent function
        }
        return displayName;
    }
    let fun1 = abcd(); // name is binded to displayName() fun
    fun1(); // Mozilla // calling an inside function of a function (abcd)
}
