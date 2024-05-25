"use strict";
{
    class A {
        constructor(a) {
            this.a = 5;
            this.myNum = 7;
            this.a = a;
        }
        print() {
            console.log(this.a);
        }
    }
    class B extends A {
        constructor() {
            super(...arguments);
            this.name = 'ABC';
        }
    }
    class C extends A {
        constructor(a, len) {
            // must
            super(a); // must be first call
            this.len = 50;
            this.len = len;
        }
        // function overriding
        print() {
            super.print(); // call parent function
            console.log(this.a);
            console.log(this.len);
        }
    }
    let b1 = new B(20);
    console.log(b1.a); // 20
    console.log(b1.name); // ABC
    const c1 = new C(12, 30);
    console.log(c1.a); // 12
    console.log(c1.len); // 30
    c1.print(); // 12 12 30
    console.log();
}
{
    // Abstract class
    class absClass {
    }
    class subClass extends absClass {
        constructor() {
            super(...arguments);
            this.num = 13;
        }
        printNum() {
            console.log(this.num);
        }
    }
    // const ac = new absClass(); // Error
    const sc = new subClass();
    console.log(sc.num); // 13
    sc.printNum(); // 13
    console.log();
}
