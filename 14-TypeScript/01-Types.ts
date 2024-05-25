{
  let num1: number = 50;
  let str: string = 'Sunny';
  let abc: boolean = true;

  console.log(num1); // 50
  console.log(str); // Sunny
  console.log(abc); // true
  console.log();
}

{
  // boolean
  const a: boolean = true;
  // const b: boolean = 0; // Error

  console.log(a); // true
  console.log(typeof a); // boolean
  console.log();
}

{
  let num1: number;
  let num2: number = 5;
  // let num3: number = "3"; // Error
  let num4 = 20.7;

  // num1 = "54"; Error

  // console.log(num1); // undefined
  console.log(num2); // 5
  console.log(num4); // 20.7

  // console.log(typeof num1); // undefined
  console.log(typeof num2); // number
  console.log(typeof num4); // number
  console.log();
}

{
  let person0: object = {
    name: 'Sunny',
    age: 22,
  };
  console.log(person0); // { name: 'Sunny', age: 22 }
  // console.log(person0.address); // Error

  // object vs object type

  // object type person1
  let person1 = {
    name: 'Sunny',
    age: 22,
  };

  // object person2
  let person2: object = {
    name: 'Sunny',
    age: 22,
  };

  // This is just ts representation of object type
  let person3: {
    name: string;
    age: number;
  } = {
    name: 'Sunny',
    age: 22,
    // place: 'Kolkata'// Error
  };
}

{
  // TS array

  // strict array
  let arr1: number[] = [10, 20, 30];
  let arr2: string[] = ['ab', 'bca'];
  // let arr3: string[] = ['ab', 'bca', 10]; // Error

  // Flexible array
  let arr4: any[] = ['ab', 'bca', 10]; // Error
  console.log();
}

{
  // Tuple type
  let role: [number, string] = [10, 'author'];
  console.log(role); // [ 10, 'author' ]

  role.push('abc'); // push is allowed in tuple
  console.log(role); // [ 10, 'author', 'abc ]

  // role[0] = 'abc'; // Type Error
  role = [10, 'author'];
  // role = [10, "author", 'abc']; // Error - not supported
  console.log(role); // [ 10, 'author' ]
  console.log();
}

{
  // Enum type
  // Default value for first enum will be 0 and it will increasing for next enums
  // We can manually set enum values, counting will start from them
  enum Role {
    ADMIN,
    READ_ONLY,
    TEACHER = 7,
    AUTHOR,
    AUTHOR2 = 'author2',
  }

  console.log(Role.ADMIN); // 0
  console.log(Role.READ_ONLY); // 1
  console.log(Role.TEACHER); // 7
  console.log(Role.AUTHOR); // 8
  console.log(Role.AUTHOR2); // author2
  console.log();
}

{
  // Any type
  let x: any = 5;
  console.log(x); // 5
  console.log(typeof x); // number

  x = 'Sunny';
  console.log(x); // Sunny
  console.log(typeof x); // string

  console.log();
}

{
  // Declaring types in function call
  function add(n1: number, n2: number) {
    return n1 + n2;
  }

  console.log(add(5, 4)); // 9
  // console.log(add(5, "4")); // Type Error
  console.log(add(5, 4.5)); // 9.5
}

{
  //  union
  let x: number | string;

  x = 5;
  console.log(x); // 5
  console.log(typeof x); // number

  x = 'Sunny';
  console.log(x); // Sunny
  console.log(typeof x); // string

  // x = true ; // Error
  console.log();

  function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else return a.toString() + b.toString();
  }

  console.log(combine(5, 10)); // 15
  console.log(combine('10', '20')); // 1020
  console.log(combine('Ab', 'Cd')); // AbCd
  console.log(combine('Ab', 10)); // Ab10

  console.log();
}

{
  // Literal type
  function combine2(a: number | string, b: number | string, resultConversion: 'as-number' | 'as-text') {
    if ((typeof a === 'number' && typeof b === 'number') || resultConversion === 'as-number') {
      return +a + +b;
    } else return a.toString() + b.toString();
  }

  console.log( combine2 (10, 20, 'as-number')); // 30
  console.log(combine2('10', '20', 'as-number')); // 30
  console.log(combine2('Ab', 'Cd', 'as-text')); // AbCd
  console.log(combine2('Ab', 20, 'as-text')); // Ab20
  console.log();
}

{
  // Type aliases
  type Count = number;
  type addAble = number | string;
  type addDesc = 'as-number' | 'as-text';

  let num: Count = 40;
  console.log(num); // 40
  console.log(typeof num); // number

  let ab: addDesc = 'as-number';
  console.log(ab); // as-number

  // Creating our own custom type
  type User = { name: string; age: number }; // Custom type

  let person1: User = { name: 'Sunny', age: 22 };
  let person2: User = { name: 'Alok', age: 45 };
  // let person3: User = { name: 'Alok', age: 45, place: 'Abc' }; // Error

  console.log(person1); // { name: 'Sunny', age: 22 }
  console.log(typeof person1); // object
  console.log(person1); // { name: 'Sunny', age: 22 }

  console.log();
}

{
  // union aliases with function
  type Combinable = number | string;
  type ConversionDescriptor = 'as-number' | 'as-string';

  function combine3(a: Combinable, b: Combinable, resultConversion: ConversionDescriptor): Combinable {
    if ((typeof a === 'number' && typeof b === 'number') || resultConversion === 'as-number') {
      return +a + +b;
    } else return a.toString() + b.toString();
  }

  console.log(combine3(10, 20, 'as-number')); // 30
  console.log(combine3('10', '20', 'as-string')); // 1020
  console.log(combine3('10', 20, 'as-number')); //
  console.log();
}

{
  // unknown type
  let userInput: unknown;
  let userName = 'Sunny';

  console.log(typeof userInput); // undefined

  userInput = 5;
  userInput = 'Mohan';

  // userName = userInput; // Error
  if (typeof userInput === 'string') {
    userName = userInput;
  }

  console.log(typeof userInput); // string
  console.log(userName); // Mohan
  console.log();
}

{
  // never type
  // by default return type is void but we can set manually set it never
  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
  }

  // // Uncomment to see changes
  // const result = generateError('An error occurred', 404);
  // console.log(result); // nothing will be printed
  // console.log();
}

