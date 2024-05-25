{
  class Box {
    length: number;

    constructor(len: number, wid: number) {
      this.length = len;
    }

    // printLen() {
    //   console.log('len : ', this.length);
    // }

    printLen(this: Box) {
      console.log('len : ', this.length);
    }
  }

  const box1 = new Box(10, 30);
  box1.printLen(); // len : 10

  // const box2 = { printLen: box1.printLen };
  // box2.printLen(); // Error

  const box3 = { length: 45, printLen: box1.printLen };
  box3.printLen(); // len : 45
  console.log();
}

{
  // Multiple constructor in ts
  // There is no direct way to create multiple cons in ts
  // we have to provide a common implementation for all cons defined
  class MyClass {
    constructor();
    constructor(x: number);
    constructor(x: number, y: string);
    constructor(...args: any[]) {
      if (args.length === 0) {
        console.log('cons with 0 args');
      } else if (args.length === 1) {
        console.log('cons with 1 args');
      } else if (args.length === 2) {
        console.log('cons with 2 args');
      }
    }
  }

  const obj0 = new MyClass(); // cons with 0 args
  const obj1 = new MyClass(10); // cons with 1 args
  const obj2 = new MyClass(15, 'Sunny'); // cons with 2 args
  // const obj3 = new MyClass(25, 30, 45); // Error
  console.log();
}

{
  // Private members
  class Box {
    // public length: number; // public Access Modifier
    // length: number; // public Access Modifier
    // private width: number; // private Access Modifier
    protected vol: number = 0; // protected Access Modifier
    // public readonly boxId : string; // readonly var

    // constructor(len: number, width: number) {
    //   this.length = len;
    //   this.width = width;
    //   this.boxId = boxId;
    // }

    // Shorthand initialization
    // we can directly initialize vars in constructor, no need to declare and then set using this
    constructor(public length: number, private width: number, public readonly boxId: string) {}

    printLen() {
      console.log('len = ', this.length);
    }

    printWidth() {
      // this.boxId = 'b2';  // Error, can't reassign readonly vars
      console.log('width = ', this.width);
    }

    private calArea() {
      return this.length * this.width;
    }
    printArea() {
      console.log('Area = ', this.calArea());
    }
  }

  const box1 = new Box(10, 20, 'b1');
  console.log(box1.length); // 10
  // console.log(box1.width); // Error

  // box1.calArea(); // Error
  // box1.boxId = 'b2'; // Error
  box1.printArea(); // Area = 200
  console.log();
}

{
  // getters and setters - notice there is no parenthesis ( "()" ) required for calling these function
  class Box {
    private length: number = 0;
    private width: number = 0;

    get getLength() {
      return this.length;
    }

    get getWidth() {
      return this.width;
    }

    set setLength(length: number) {
      this.length = length;
    }

    set setWidth(width: number) {
      this.width = width;
    }
  }

  const box1 = new Box();

  // console.log(box1.length); // Error
  box1.setLength = 10;
  box1.setWidth = 22;

  console.log(box1.getLength); // 10
  console.log(box1.getWidth); // 2
  console.log();
}

{
  // static properties and methods
  class Abc {
    str: string = 'idk';
    static myName: string = 'sunny';

    static getMyName() {
      // console.log(this.str); // Error - str is not static
      // return myName; // Error
      // return this.myName;
      return Abc.myName;
    }

    printMyName() {
      // console.log(this.myName); // Error
      console.log(Abc.myName);
    }
  }

  console.log(Abc.getMyName()); // sunny
  console.log(Abc.myName); // sunny
  console.log();
}

{
  // Singletons and private constructors
  class Department {
    static instance: Department;
    name: string;
    id: string;

    static getInstance() {
      if (Department.instance) {
        return this.instance;
      }

      this.instance = new Department('FED Dept', 'ID8080');
      return this.instance;
    }

    // Singletons are created using private constructor
    private constructor(name: string, id: string) {
      this.name = name;
      this.id = id;
    }
  }

  const dept = Department.getInstance();
  const dept2 = Department.getInstance();

  console.log(dept); // Department { name: 'FED Dept', id: 'ID8080' }
  console.log(dept === dept2); // true
  console.log();
}
