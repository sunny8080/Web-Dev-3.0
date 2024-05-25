{
  class A {
    a: number = 5;
    protected myNum: number = 7;

    constructor(a: number) {
      this.a = a;
    }

    print() {
      console.log(this.a);
    }
  }

  class B extends A {
    name: string = 'ABC';
  }

  class C extends A {
    len: number = 50;

    constructor(a: number, len: number) {
      // must
      super(a); // must be first call
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
  abstract class absClass {
    // abstract num: number = 15 // Error;
    abstract num: number;

    abstract printNum(): void;
  }

  class subClass extends absClass {
    num = 13;

    printNum(): void {
      console.log(this.num);
    }
  }

  // const ac = new absClass(); // Error

  const sc = new subClass();
  console.log(sc.num); // 13
  sc.printNum(); // 13
  console.log();
}
