{
  // Union Types
  type Combinable = string | number;

  const a: Combinable = 20;
  const b: Combinable = 'ABC';

  console.log(a); // 20
  console.log(b); // ABC
  console.log();
}

{
  // Intersection types
  type Combinable = string | number;
  type Numeric = number | boolean;
  type Universal = Combinable & Numeric;

  let x: Universal = 10;
  // let x: Universal = "10"; // Error
  console.log(typeof x); // number
  console.log();
}

{
  // Intersection type in case of objects
  // It can also be done using interface
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  // interface SuperAdmin extends Admin, Employee {}
  type SuperAdmin = Admin & Employee;

  const sa1: SuperAdmin = {
    name: 'Sunny',
    startDate: new Date(),
    privileges: ['AWS'],
  };

  console.log(typeof sa1); // object
  console.log(sa1); // { name: 'Sunny' ... }
  console.log();

  // Type guards
  type UnknownEmployee = Admin | Employee;

  function printEmpInfo(emp: UnknownEmployee) {
    console.log(emp.name);

    // In js, typeof emp will always be object and not out custom type
    // if (typeof emp === 'Admin') {
    //   console.log(emp.privileges);
    // }

    if ('privileges' in emp) {
      console.log(emp.privileges);
    }

    if ('startDate' in emp) {
      console.log(emp.startDate);
    }
  }

  printEmpInfo(sa1); // Sunny ['AWS'] 2024...

  const emp1: UnknownEmployee = {
    name: 'Alok',
    startDate: new Date(),
  };

  printEmpInfo(emp1); // Alok 2024...
  console.log();
}

{
  // Type guards
  // idea of checking if certain properties exist or not before using it
  // ways to check - typeof, instanceof, in
  type Combinable = string | number;

  function combine(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    } else return a + b;
  }

  console.log(combine(10, '20')); // 1020
  console.log();
}

{
  // Type guards ex
  class Car {
    drive() {
      console.log('Driving ....');
    }
  }

  class Truck {
    drive() {
      console.log('Driving ....');
    }

    loadCargo() {
      console.log('Loading Cargo ... ');
    }
  }

  type Vehicle = Car | Truck;

  function useVehicle(v: Vehicle) {
    v.drive();

    if (v instanceof Truck) {
      v.loadCargo();
    }
  }

  const c1 = new Car();
  const t1 = new Truck();

  useVehicle(c1); // Driving ....
  useVehicle(t1); // Driving ....   Loading Cargo ...
  console.log();
}

{
  // Discriminated Unions
  // just like Type Guards
  // instead of checking a property exists or not, we can use a common property to define obj is of which interface
  interface Bird {
    objType: 'bird';
    flyingSpeed: number;
  }

  interface Horse {
    objType: 'horse';
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.objType) {
      case 'bird':
        speed = animal.flyingSpeed;
        break;
      case 'horse':
        speed = animal.runningSpeed;
    }

    console.log('Moving speed =', speed);
  }

  moveAnimal({ objType: 'bird', flyingSpeed: 30 }); // Moving speed = 30
  moveAnimal({ objType: 'horse', runningSpeed: 40 }); // Moving speed = 40
  console.log();
}

{
  // Typecasting
  // const abc = myFun(45)!; // This (!) means abc will never be null

  // const userInputEle = document.getElementById('user-input'); // Error on setting value
  // const userInputEle = document.getElementById('user-input')!; // Error on setting value
  // const userInputEle = <HTMLInputElement>document.getElementById('user-input')!; // can't use in jsx or tsx

  // Commenting so that no error will come on compile and run
  // const userInputEle = document.getElementById('user-input')! as HTMLInputElement;
  // userInputEle.value = 'Hello World';
  console.log();
}

{
  // Index properties
  // create object more flexible
  // using index props, we can create which may hold by interface
  // it means we can have any no of properties whose key is of typeA (string) and value is of typeB (string)

  interface ErrorContainer {
    // how to write index properties
    // it means we can have any no of properties whose key is string and value is string

    // we can't use id as no, that is restriction on index prop, as we are using string as value
    // id: number; // Error
    // id: string; // Okay
    [prop: string]: string;
  }

  const error1: ErrorContainer = {
    email: 'Not a valid email!',
  };

  const error2: ErrorContainer = {
    userName: 'Must start with capital character',
  };
  const error3: ErrorContainer = {
    email: 'Not a valid email!',
    userName: 'Must start with capital character',
    password: 'password is incorrect',
  };

  console.log(error1); // { email: 'Not a valid email!' }
  console.log();
}

{
  // Function overloads
  // used to create multiple methods with same name but different parameter types and return type
  // i am unable to create function overload with different no of parameters

  function add(a: number, b: number): number;
  function add(a: string, b: string): string;
  function add(a: any, b: any): any {
    return a + b;
  }

  console.log(add('ab', 'cd')); // abcd
  console.log(add(10, 20)); // 30
  console.log();

  // Other example
  type Combinable = string | number;

  function combine(a: number, b: number): number;
  function combine(a: string, b: string): string;
  function combine(a: number, b: string): string;
  function combine(a: string, b: number): string;
  function combine(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    } else return a + b;
  }

  console.log(combine(10, '20')); // 1020
  console.log(combine(10, 20)); // 30
  console.log(typeof combine(20, 30)); // number
  console.log();
}

{
  // Optional chaining
  // it helps when we are getting data from other sources like from some file or from some api response

  const userData = {
    id: 'kac002',
    name: 'Sunny',
    address: { city: 'Kolkata', state: 'West bengal' },
  };

  // console.log(userData.address.city);
  console.log(userData?.address?.city); // it avoids run time errors
  // console.log(userData.dob); // can cause run time errors
  // console.log(userData?.dob);
  console.log();
}

{
  // Nullish Coalescing
  const userInput = '';
  const userInput2 = null;
  const userName1 = userInput || 'Default';
  const userName2 = userInput ?? 'Default';
  const userName3 = userInput2 ?? 'Default2';

  console.log(userName1 + ' 111'); // Default 111
  console.log(userName2 + ' 222'); // 222
  console.log(userName3); // Default2
  console.log();
}
