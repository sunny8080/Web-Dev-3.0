class Person {
  constructor(name) {
    this.name = name
  }

  printName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, gender) {
    super(name);
    this.gender = gender
  }

  printGender = () => {
    console.log(this.gender);
  }
}

const person = new Person("Sunny");
const person2 = new Person("Suraj");
person.printName()
console.log(person.name);
console.log(person2.name);
console.log();

const stud = new Student("sunny", "male");
stud.printName()
stud.printGender()
