"use strict";
{
    // create object of interface
    let person1;
    person1 = {
        name: 'Sunny',
        age: 21,
        greet(phrase) {
            console.log(phrase + ' : ' + this.name);
        },
    };
    console.log(person1.age); // 21
    console.log(person1.name); // Sunny
    person1.greet('Hello'); // Hello : Sunny
    console.log();
}
{
    let person1 = {
        name: 'Sunny',
        age: 21,
        greet(phrase) {
            console.log(phrase + ' : ' + this.name);
        },
    };
    console.log(person1.age); // 21
    console.log(person1.name); // Sunny
    person1.greet('Hello'); // Hello : Sunny
    console.log();
}
{
    class maruti {
        constructor(noOfWheels, company, model, year) {
            this.noOfWheels = noOfWheels;
            this.company = company;
            this.model = model;
            this.year = year;
        }
        printDetails() {
            console.log(this.noOfWheels);
            console.log(this.company);
            console.log(this.model);
            console.log(this.year);
        }
    }
    const car1 = new maruti(4, 'TATA', 'maruti-800', 2024);
    car1.printDetails(); // 4 TATA maruti-800 2024
    let car2;
    car2 = new maruti(4, 'TATA', 'maruti-800', 2024);
    car2.printDetails(); // 4 TATA maruti-800 2024
    // console.log(car2.noOfWheels); // Error - noOfWheels is not a property of car interface
    console.log();
}
{
    class maruti {
        constructor(noOfWheels, company, model, year) {
            this.noOfWheels = noOfWheels;
            this.company = company;
            this.model = model;
            this.year = year;
        }
        printDetails() {
            console.log(this.noOfWheels);
            console.log(this.company);
            console.log(this.model);
            console.log(this.year);
        }
    }
    const car1 = new maruti(4, 'TATA', 'maruti-800', 2024);
    car1.printDetails(); // 4 TATA maruti-800 2024
    let car2;
    car2 = new maruti(4, 'TATA', 'maruti-800', 2024);
    car2.printDetails(); // 4 TATA maruti-800 2024
    console.log(car2.noOfWheels); // 4
    console.log();
}
{
    let add;
    add = (a, b) => a + b;
    console.log(add(10, 12)); // 22
    console.log();
}
{
    // optional attribute in class and interface
    class Box {
        constructor(length) {
            if (length != 0) {
                this.length = length;
            }
        }
    }
    const box1 = new Box();
    const box2 = new Box(20);
    console.log(box1.length); // undefined
    console.log(box2.length); // 20
    console.log();
}
{
    class Xyz {
        constructor() {
            this.length = 20;
        }
    }
    const obj = new Xyz();
    console.log(obj.msg); // undefined
    console.log();
}
