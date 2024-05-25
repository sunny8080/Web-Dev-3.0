{
  // Interface
  interface Person {
    // name: string="sdf"; // Error
    name: string;
    age: number;

    // Methods
    greet(phrase: string): void;
  }

  // create object of interface
  let person1: Person;
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
  // custom type
  type Person = {
    name: string;
    age: number;

    // Methods
    greet(phrase: string): void;
  };

  let person1 = {
    name: 'Sunny',
    age: 21,
    greet(phrase: string) {
      console.log(phrase + ' : ' + this.name);
    },
  };

  console.log(person1.age); // 21
  console.log(person1.name); // Sunny
  person1.greet('Hello'); // Hello : Sunny
  console.log();
}

{
  // Class implementing Interfaces
  interface vehicle {
    noOfWheels: number;
  }

  interface car {
    readonly company: string;
    model: string;

    printDetails(): void;
  }

  class maruti implements vehicle, car {
    noOfWheels: number;
    company: string;
    model: string;
    year: number;

    constructor(noOfWheels: number, company: string, model: string, year: number) {
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

  let car2: car;
  car2 = new maruti(4, 'TATA', 'maruti-800', 2024);
  car2.printDetails(); // 4 TATA maruti-800 2024
  // console.log(car2.noOfWheels); // Error - noOfWheels is not a property of car interface
  console.log();
}

{
  // Inheritance in interfaces
  interface vehicle {
    noOfWheels: number;
  }

  interface car extends vehicle {
    readonly company: string;
    model: string;

    printDetails(): void;
  }

  class maruti implements car {
    noOfWheels: number;
    company: string;
    model: string;
    year: number;

    constructor(noOfWheels: number, company: string, model: string, year: number) {
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

  let car2: car;
  car2 = new maruti(4, 'TATA', 'maruti-800', 2024);
  car2.printDetails(); // 4 TATA maruti-800 2024
  console.log(car2.noOfWheels); // 4
  console.log();
}

{
  // Interfaces as Function type
  // type AddFn = (a: number, b: number) => number;
  interface AddFn {
    (a: number, b: number): number;
  }

  let add: AddFn;
  add = (a: number, b: number) => a + b;

  console.log(add(10, 12)); // 22
  console.log();
}

{
  // optional attribute in class and interface
  class Box {
    length?: number;

    constructor(length?: number) {
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
  interface Abc {
    // Optional variable
    msg?: string;

    // Optional method
    printMsg?(): void;
  }

  class Xyz implements Abc {
    length: number = 20;
    msg?: string;
  }

  const obj = new Xyz();
  console.log(obj.msg); // undefined
  console.log();
}
