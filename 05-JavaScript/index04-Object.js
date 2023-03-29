{
    // object
    let box = {
        l: 10,
        b: 50,

        // // function or method
        // area() {
        // 	// console.log("Area = " + l * b); // Error
        //   console.log("Area = " + this.l * this.b);
        // },

        area: function () {
            // console.log("Area = " + l * b); // Error
            console.log("Area = " + this.l * this.b);
        },
    };

    box.area(); // Area = 500
    console.log();


	if('l' in box) console.log("Yes"); // Yes
	else console.log("No"); 

	if('x' in box) console.log("Yes");
	else console.log("No"); // No
}

{
    // Dynamic nature of objects
    let box1 = {
        l: 10,
        b: 50,

        area() {
            console.log("Area = " + this.l * this.b);
        },
    };

    box1.h = 12;
    console.log(box1.h); // 12
    delete box1.h;
    console.log(box1.h); // undefined
}

// Object creation : Factory function, Constructor fun
{
    // Factory function
    function createBox(len, bre) {
        let box = {
            l: len,
            b: bre,

            // function or method
            area: function () {
                console.log("Area = " + this.l * this.b);
            },
        };
        return box;
    }

    let box1 = createBox(5, 4);
    let box2 = createBox(10, 20);
    box1.area(); // Area = 20
    box2.area(); // Area = 200

    console.log();
}

{
    // Constructor function -> pascal Notation (Eg. CreateBox)
    function CreateBox(len, bre) {
        this.l = len; // this keyword
        this.b = bre;
        this.area = function () {
            console.log("Area = " + this.l * this.b);
        };
    }

    let box1 = new CreateBox(5, 4);
    let box2 = new CreateBox(10, 5);
    box1.area(); // 20
    box2.area(); // 50
    console.log();
}

{
    // class
    class CreateBox {
        constructor(len, bre) {
            this.l = len;
            this.b = bre;
        }

        area() {
            console.log("Area = " + this.l * this.b);
        }
    }

    let box1 = new CreateBox(5, 4);
    let box2 = new CreateBox(10, 5);
    console.log(box1.l); // 5
    box1.area(); // 20
    box2.area(); // 50

    console.log(box1.constructor); // [class CreateBox]
    console.log();
}

{
    // in js, function is also an object
    // parent function of constructor in js is Function
    // this is how an constructor is created using his Function fun
    let Box = new Function(
        "len",
        "bre",
        `this.l = len;
		this.b = bre;
		this.area = function(){
			console.log("Area = " + this.l*this.b);
		}
		`
    );

    let box1 = new Box(5, 4);
    let box2 = new Box(5, 10);
    box1.area(); // Area = 20
    box2.area(); // Area = 50
}

