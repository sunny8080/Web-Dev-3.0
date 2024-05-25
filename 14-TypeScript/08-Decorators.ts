{
  // Decorator

  // Decorator used with class
  function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
    console.log();
  }

  // Decorator Factory : using this we can accept argument
  function MyLogger(logStmt: string) {
    return function (constructor: Function) {
      console.log(logStmt);
      console.log(constructor);
      console.log();
    };
  }

  // Decorate with template
  // Same thing is used in Angular where we have to pass a template and a hookId where template have to add
  function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
      const hookEle = document.getElementById(hookId);
      const p = new constructor();
      if (hookEle) {
        hookEle.innerHTML = template;
        hookEle.querySelector('h1')!.textContent = p.name;
      }
    };
  }

  // @WithTemplate('<h1>My Person Object</h1>', 'app')
  @Logger // execute second
  @MyLogger('Logging - PERSON') // execute first
  class Person {
    name = 'Sunny';

    constructor() {
      // will execute after all decorators
      console.log('Creating person object...');
    }
  }

  const person = new Person();
  console.log();
}

{
  // Decorator used with property
  function Logger3(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
    console.log();
  }

  // Decorator used with Accessor
  function Logger4(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log();
  }

  // Decorator used with Method
  function Logger5(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    console.log();
  }

  // Decorator used with Parameter
  function Logger6(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(name);
    console.log(position);
    console.log();
  }

  class Product {
    @Logger3
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
      this.title = title;
      this._price = price;
    }

    @Logger4
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("Invalid price - price can't be negative");
      }
    }

    @Logger5
    getPriceWithTax(@Logger6 tax: number) {
      return this._price * (1 + tax);
    }
  }

  // Decorator doesn't execute when we instance object, it execute when we define class
  const p1 = new Product('Box1', 20);
  const p2 = new Product('Box1', 30);
  console.log();
}

{
  // Class Decorator which returns modified constructor
  // As we modify constructor in decorator, this decorator will only execute when we instantiate a object of this class
  function CustomDeco(myName: string) {
    return function <T extends { new (...args: any[]): { name: string } }>(originalConstructor: T) {
      console.log('Custom Class Decorator');

      return class extends originalConstructor {
        constructor(...args: any[]) {
          super();
          console.log('Modified Constructor');
          console.log(this.name);
          this.name = myName;
        }
      };
    };
  }

  @CustomDeco('Shyam')
  class Person {
    name = 'Sunny';

    constructor() {
      // will execute after all decorators
      console.log('Creating person object...');
    }
  }

  const person = new Person();
  console.log('Person name : ' + person.name);
  console.log();
}

{
  // Method Decorator which modify method descriptor
  function Autobind(target: any, methodName: String, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }

  class Printer {
    message = 'This Works!';

    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }

  const p = new Printer();
  p.showMessage();

  // const btn1 = document.getElementById('btn1');
  // btn1?.addEventListener('click', p.showMessage.bind(p));
  // btn1?.addEventListener('click', p.showMessage);

  console.log();
}

{
  // Validation with decorators
  // Just an exercise, not mandatory to lookup
  // Npm package for Different validator - https://github.com/typestack/class-validator

  interface ValidatorConfig {
    [property: string]: {
      [validatableProp: string]: string[]; // ['required', 'positive]
    };
  }

  const registeredValidators: ValidatorConfig = {};

  function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required'],
    };
  }

  function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive'],
    };
  }

  function MinLength5(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
      ...registeredValidators[target.constructor.name],
      [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'minLength5'],
    };
  }

  function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }

    let isValid = true;
    for (const propName in objValidatorConfig) {
      for (const validator of objValidatorConfig[propName]) {
        switch (validator) {
          case 'required':
            isValid &&= !!obj[propName];
            break;
          case 'minLength5':
            isValid &&= obj[propName].length > 5;
            break;
          case 'positive':
            isValid &&= obj[propName] > 0;
            break;
        }
      }
    }
    return isValid;
  }

  class Course {
    // Here both validator will work, title should not be undefined and min length should be 5
    @Required
    @MinLength5
    title: string;

    @Required
    @PositiveNumber
    price: number;

    // Private cons so we can not create from outside of the class
    private constructor(title: string, price: number) {
      this.title = title;
      this.price = price;
    }

    // can be used to create object from outside of class
    static createCourse(title: string, price: number) {
      const course = new Course(title, price);
      return validate(course) ? course : null;
    }
  }

  // const course2 = new Course('title', 4); // Error
  const course1: Course | null = Course.createCourse('Course1', 499);
  const course2: Course | null = Course.createCourse('Course2', -10);
  const course3: Course | null = Course.createCourse('', 499);
  const course4: Course | null = Course.createCourse('tmp', 499);
  console.log(course1); // Course { title: 'Course1', price: 499 }
  console.log(course2); // null
  console.log(course3); // null
  console.log(course4); // null
  console.log();
  console.log();
}
