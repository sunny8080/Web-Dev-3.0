"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
{
    // Decorator
    // Decorator used with class
    function Logger(constructor) {
        console.log('Logging...');
        console.log(constructor);
        console.log();
    }
    // Decorator Factory : using this we can accept argument
    function MyLogger(logStmt) {
        return function (constructor) {
            console.log(logStmt);
            console.log(constructor);
            console.log();
        };
    }
    // Decorate with template
    // Same thing is used in Angular where we have to pass a template and a hookId where template have to add
    function WithTemplate(template, hookId) {
        return function (constructor) {
            const hookEle = document.getElementById(hookId);
            const p = new constructor();
            if (hookEle) {
                hookEle.innerHTML = template;
                hookEle.querySelector('h1').textContent = p.name;
            }
        };
    }
    // @WithTemplate('<h1>My Person Object</h1>', 'app')
    let Person = class Person {
        constructor() {
            this.name = 'Sunny';
            // will execute after all decorators
            console.log('Creating person object...');
        }
    };
    Person = __decorate([
        Logger // execute second
        ,
        MyLogger('Logging - PERSON') // execute first
    ], Person);
    const person = new Person();
    console.log();
}
{
    // Decorator used with property
    function Logger3(target, propertyName) {
        console.log('Property Decorator');
        console.log(target);
        console.log(propertyName);
        console.log();
    }
    // Decorator used with Accessor
    function Logger4(target, name, descriptor) {
        console.log('Accessor Decorator');
        console.log(target);
        console.log(name);
        console.log(descriptor);
        console.log();
    }
    // Decorator used with Method
    function Logger5(target, name, descriptor) {
        console.log('Method Decorator');
        console.log(target);
        console.log(name);
        console.log(descriptor);
        console.log();
    }
    // Decorator used with Parameter
    function Logger6(target, name, position) {
        console.log('Parameter Decorator');
        console.log(target);
        console.log(name);
        console.log(position);
        console.log();
    }
    class Product {
        constructor(title, price) {
            this.title = title;
            this._price = price;
        }
        set price(val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error("Invalid price - price can't be negative");
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        Logger3
    ], Product.prototype, "title", void 0);
    __decorate([
        Logger4
    ], Product.prototype, "price", null);
    __decorate([
        Logger5,
        __param(0, Logger6)
    ], Product.prototype, "getPriceWithTax", null);
    // Decorator doesn't execute when we instance object, it execute when we define class
    const p1 = new Product('Box1', 20);
    const p2 = new Product('Box1', 30);
    console.log();
}
{
    // Class Decorator which returns modified constructor
    // As we modify constructor in decorator, this decorator will only execute when we instantiate a object of this class
    function CustomDeco(myName) {
        return function (originalConstructor) {
            console.log('Custom Class Decorator');
            return class extends originalConstructor {
                constructor(...args) {
                    super();
                    console.log('Modified Constructor');
                    console.log(this.name);
                    this.name = myName;
                }
            };
        };
    }
    let Person = class Person {
        constructor() {
            this.name = 'Sunny';
            // will execute after all decorators
            console.log('Creating person object...');
        }
    };
    Person = __decorate([
        CustomDeco('Shyam')
    ], Person);
    const person = new Person();
    console.log('Person name : ' + person.name);
    console.log();
}
{
    // Method Decorator which modify method descriptor
    function Autobind(target, methodName, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
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
        constructor() {
            this.message = 'This Works!';
        }
        showMessage() {
            console.log(this.message);
        }
    }
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage", null);
    const p = new Printer();
    p.showMessage();
    // const btn1 = document.getElementById('btn1');
    // btn1?.addEventListener('click', p.showMessage.bind(p));
    // btn1?.addEventListener('click', p.showMessage);
    console.log();
}
{
    const registeredValidators = {};
    function Required(target, propName) {
        var _a, _b;
        registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
    }
    function PositiveNumber(target, propName) {
        var _a, _b;
        registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
    }
    function MinLength5(target, propName) {
        var _a, _b;
        registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'minLength5'] });
    }
    function validate(obj) {
        const objValidatorConfig = registeredValidators[obj.constructor.name];
        if (!objValidatorConfig) {
            return true;
        }
        let isValid = true;
        for (const propName in objValidatorConfig) {
            for (const validator of objValidatorConfig[propName]) {
                switch (validator) {
                    case 'required':
                        isValid && (isValid = !!obj[propName]);
                        break;
                    case 'minLength5':
                        isValid && (isValid = obj[propName].length > 5);
                        break;
                    case 'positive':
                        isValid && (isValid = obj[propName] > 0);
                        break;
                }
            }
        }
        return isValid;
    }
    class Course {
        // Private cons so we can not create from outside of the class
        constructor(title, price) {
            this.title = title;
            this.price = price;
        }
        // can be used to create object from outside of class
        static createCourse(title, price) {
            const course = new Course(title, price);
            return validate(course) ? course : null;
        }
    }
    __decorate([
        Required,
        MinLength5
    ], Course.prototype, "title", void 0);
    __decorate([
        Required,
        PositiveNumber
    ], Course.prototype, "price", void 0);
    // const course2 = new Course('title', 4); // Error
    const course1 = Course.createCourse('Course1', 499);
    const course2 = Course.createCourse('Course2', -10);
    const course3 = Course.createCourse('', 499);
    const course4 = Course.createCourse('tmp', 499);
    console.log(course1); // Course { title: 'Course1', price: 499 }
    console.log(course2); // null
    console.log(course3); // null
    console.log(course4); // null
    console.log();
    console.log();
}
