// Vehicle - superclass
function Vehicle(name) {
  this.name = name;
}
// superclass method
Vehicle.prototype.start = function () {
  return "engine of " + this.name + " starting...";
};
// Car - subclass
function Car(name) {
  Vehicle.call(this, name); // call super constructor.
}
// subclass extends superclass
Car.prototype = Object.create(Vehicle.prototype);
// subclass method
Car.prototype.run = function () {
  console.log("Hello " + this.start());
};
// instances of subclass
var c1 = new Car("Fiesta");
var c2 = new Car("Baleno");
// accessing the subclass method which internally access superclass method
c1.run(); // "Hello engine of Fiesta starting..."
c2.run(); // "Hello engine of Baleno starting..."
///////////////////////////////////////////////
// base object with methods including initialization
var Vehicle = {
  init: function (name) {
    this.name = name;
  },
  start: function () {
    return "engine of " + this.name + " starting...";
  },
};
// delegation link created between sub object and base object
var Car = Object.create(Vehicle);
// sub object method
Car.run = function () {
  console.log("Hello " + this.start());
};
// instance object with delegation link point to sub object
var c1 = Object.create(Car);
c1.init("Fiesta");
var c2 = Object.create(Car);
c2.init("Baleno");
c1.run(); // "Hello engine of Fiesta starting..."
c2.run(); // "Hello engine of Baleno starting..."
///////////////////////////////////////////////
let animal = {
  eats: true,
  walks(name) {
    return !this.IsSleeping
      ? console.log(`${this.name} walks`)
      : console.log(`${this.name} is sleeping`);
  },
  sleep() {
    this.IsSleeping = true;
  },
};
let dog = {
  name: `Skippy`,
  barks: true,
  //   __proto__: animal,
};
let puppy = {
  age: 2,
  __proto__: dog,
};
dog.__proto__ = animal;
console.log(dog.eats);
dog.walks(dog.name);
console.log(puppy.name);
dog.sleep();
console.log(dog.IsSleeping);
dog.walks(this.name);
for (let prop in dog) {
  let isOwnProp = dog.hasOwnProperty(prop);
  isOwnProp
    ? console.log(`${prop} is own property`)
    : console.log(`${prop} has been inherited`);
}
///////////////////////////////////////////////
let user = {
  name: `John`,
  lastName: `Connor`,
  set fullName(fullname) {
    [this.name, this.lastName] = fullname.split(` `);
  },
  get fullName() {
    return `${this.name} ${this.lastName}`;
  },
};
let admin = {
  __proto__: user,
  isAdmin: true,
};
console.log(admin.fullName);
admin.fullName = `Alice Cooper`;
console.log(admin.fullName);
console.log(user.fullName);
///////////////////////////////////////////////
//////////////////////////////////////////////
// function Person(firstName, birthYear) {
//   console.log(this);
//   //Instance Properties;
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //Methods
//   // this.calcAge = function () {
//   //   console.log(2022 - this.birthYear);
//   // };
// }
// const alex = new Person(`Alex`, 1987);
// console.log(alex);
// //1.  New {Empty obj} is created;
// //2. function is called with .this = {} that points to the New empty obj
// //3. {} is linked to prototype
// //4. function automatically returns {}
// const katie = new Person(`Katie`, 1990);
// const jane = new Person(`Jane`, 1989);
// console.log(katie, jane);
// console.log(alex instanceof Person);
// /////PROTOTYPES AND INHERITANCE////////////////
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// alex.calcAge();
// console.log(alex.__proto__);
// console.log(alex.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(alex));
// Person.prototype.species = `Homo Sapiens`;
// console.log(alex.species, jane.species);
// console.log(alex.hasOwnProperty(`firstName`));
// console.log(alex.hasOwnProperty(`species`));
// ///////////////////////////////////////////////
// const Auto = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Auto.prototype.accelerate = function (stepOnIt) {
//   this.speed += stepOnIt;
//   console.log(`Speed of ${this.make} is ${this.speed}km/h`);
//   return this;
// };
// Auto.prototype.brake = function (brake) {
//   this.speed -= brake;
//   console.log(`${this.make} is slowing down to ${this.speed}km/h`);
//   return this;
// };
// const bmw = new Auto(`BMW`, 120);
// const merc = new Auto(`Mercedes`, 110);
// bmw.accelerate(50).brake(80).accelerate(10).accelerate(20);
// merc.accelerate(80).brake(25);
///////////////////////////////////////////////
//GETTERS/SETTERS//////////////
/*
  const account = {
    owner: `Alex`,
    movements: [200, 300, 100, 500],
    get latest() {
      return this.movements.slice(-1).pop();
    },
    set latest(mov) {
      this.movements.push(mov);
    },
  };
  console.log(account.latest);
  account.latest = 250;
  console.log(account.movements);
  */
/////////////////////////////////////////////////OBJECT.CREATE////////////////////////////////
/*
 const PersonProto = {
   calcAge() {
     console.log(2022 - this.birthYear);
     return this;
    },
    init(fname, birthYear) {
      this.fname = fname;
      this.birthYear = birthYear;
      return this;
    },
  };
  const steven = Object.create(PersonProto);
  steven.name = `Steven`;
  steven.birthYear = 1987;
  console.log(steven);
  steven.calcAge();
  const Sarah = Object.create(PersonProto);
  Sarah.init(`Sarah`, 1987).calcAge();
  */
/////////////////////////////////////////////////INHERITANCE BETWEEN CONSTRUCTOR FUNCTIONS
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
/////LINKING STUDENT WITH THE PERSON!!!!!////
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`Hey, my name is ${this.firstName}, I study ${this.course}`);
};
const mike = new Student(`Mike`, 2000, `Computer Science`);
console.log(mike);
mike.introduce();
mike.calcAge();
///////////////////////////////////////////////
// const person = {
//   firstName: `Elvis`,
//   lastName: `Presley`,
// };
// const prototype = {
//   firstName: `Daniel`,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// Object.setPrototypeOf(person, prototype);
// // delete person.getFullName;
// // delete prototype.getFullName;
// console.log(person.getFullName());
// person.age = 100;
// console.log(prototype.age);
// console.log(person.prototype);
// console.log(person.__proto__);
// console.log(Object.getPrototypeOf(person));
// console.log(Object.setPrototypeOf(person));
///////////////////////////////////////////////
/*
      class CarCl {
        constructor(make, speed) {
          this.make = make;
          this.speed = speed;
        }
        accelerate(speed) {
          this.speed += speed;
          console.log(`${this.make} is going at ${this.speed}km/h`);
          return this;
        }
        brake(brake) {
          this.speed -= brake;
    console.log(`${this.speed} slowing down to ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    console.log(`${this.make} speed in mi/h - ${this.speed / 1.6}`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.make} speed is - ${this.speed}km/h`);
  }
}
let bmw = new CarCl(`BMW`, 120);
let merc = new CarCl(`Mercedes`, 120);
bmw
.accelerate(10)
.accelerate(20)
.accelerate(50)
.brake(10)
.brake(50)
.accelerate(40);
bmw.speedUS;
bmw.speedUS = 60;
console.log(bmw);
merc
.accelerate(10)
.accelerate(20)
.accelerate(50)
.brake(10)
.brake(50)
.accelerate(40);
*/
///////////////////////////////////////////////
// class Builder {
//   constructor(value = 0) {
//     this.value = value;
//   }
//   plus(...n) {
//     n.forEach((el) => {
//       this.value += el;
//     });
//     console.log(this.value);
//     return this;
//   }
//   minus(...n) {
//     n.forEach((el) => {
//       this.value -= el;
//     });
//     console.log(this.value);
//     return this;
//   }
//   multiply(...n) {
//     n.forEach((el) => {
//       this.value *= el;
//     });
//     console.log(this.value);
//     return this;
//   }
//   divide(...n) {
//     n.forEach((el) => {
//       this.value /= el;
//     });
//     console.log(this.value);
//     return this;
//   }
// }

// const StringBuilder = new Builder(`Hello`);
// const StringBuilder = function (value = ``) {
// Builder.call(this, value);
//   this.str = value.toString();
// };
// StringBuilder.prototype = Object.create(Builder.prototype);
// // StringBuilder.prototype.constructor = StringBuilder;
// // const StringBuilder = Object.create(Builder);
// StringBuilder.prototype.plus = function (...str) {
//   str.forEach((el) => {
//     this.str += el;
//   });
//   console.log(this.str);
//   return this;
// };
// StringBuilder.prototype.minus = function (n) {
//   let k = this.str.slice(0, this.str.length - n);
//   this.str = k;
//   console.log(this.str);
//   return this;
// };
// StringBuilder.prototype.multiply = function (int) {
//   let k = this.str.repeat(int);
//   this.str = k;
//   console.log(this.str);
//   return this;
// };
// StringBuilder.prototype.divide = function (n) {
//   let k = Math.floor(this.str.length / n);
//   let j = this.str.slice(0, k);
//   this.str = j;
//   console.log(this.str);
//   return this;
// };
// StringBuilder.prototype.remove = function (str) {
//   let k = [];
//   let j = [...this.str];
//   j.filter((el) => {
//     if (el !== str) {
//       k.push(el);
//     }
//   });
//   this.str = k.join(``);
//   console.log(this.str);
//   return this;
// };
// StringBuilder.prototype.sub = function (from, n) {
//   let k;
//   if (n + 1 < this.str.length) {
//     k = this.str.slice(from, n + 1);
//   } else k = this.str.slice(from);
//   this.str = k;
//   console.log(this.str);
//   return this;
// };
// Builder.prototype.get = function () {
//   console.log(`->`, this.str);
//   return this;
// };
// let strBuilder = new StringBuilder(`Hello`);
// strBuilder
//   .plus(` all`, `!`)
//   .minus(4)
//   .multiply(3)
//   .divide(4)
//   .remove(`l`)
//   .sub(1, 1)
//   .get();
// // strBuilder.get();
///////////////////////////////////////////////
const Builder = function (value) {
  this.value = value;
};
Builder.prototype.plus = function (...n) {
  n.forEach((el) => {
    this.value += el;
  });
  console.log(this.value);
  return this;
};
Builder.prototype.minus = function (...n) {
  n.forEach((el) => {
    this.value -= el;
  });
  console.log(this.value);
  return this;
};
Builder.prototype.multiply = function (...n) {
  n.forEach((el) => {
    this.value *= el;
  });
  console.log(this.value);
  return this;
};
Builder.prototype.divide = function (...n) {
  n.forEach((el) => {
    this.value /= el;
  });
  console.log(this.value);
  return this;
};
Builder.prototype.get = function () {
  console.log(`->`, this.value);
  return this;
};
//////////////////////////////////////////////////ES6 CHILD CLASS/////////////////////////////
class IntBuilder extends Builder {
  constructor(value = 0) {
    super(value);
  }
  mod(n) {
    console.log((this.value %= n));
    return this;
  }
  random(min, max) {
    console.log(
      `Random number:`,
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }
}
let intBuilder = new IntBuilder(10);
console.log(intBuilder);
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();
intBuilder.random(10, 20);
console.log(IntBuilder instanceof Builder);
console.log(intBuilder instanceof Builder);
/////////////////////////////////////////////////ES5 CHILD CLASS/////////////////////////////
const StringBuilder = function (value = ``) {
  Builder.call(this, value);
  this.value = value.toString();
  // this.str = str.toString();
};
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.minus = function (n) {
  let k = this.value.slice(0, this.value.length - n);
  this.value = k;
  console.log(this.value);
  return this;
};
StringBuilder.prototype.multiply = function (int) {
  let k = this.value.repeat(int);
  this.value = k;
  console.log(this.value);
  return this;
};
StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.value.length / n);
  let j = this.value.slice(0, k);
  this.value = j;
  console.log(this.value);
  return this;
};
StringBuilder.prototype.remove = function (str) {
  let k = [];
  let j = [...this.value];
  j.filter((el) => {
    if (el !== str) {
      k.push(el);
    }
  });
  this.value = k.join(``);
  console.log(this.value);
  return this;
};
StringBuilder.prototype.sub = function (from, n) {
  let k;
  if (n + 1 < this.value.length) {
    k = this.str.slice(from, n + 1);
  } else k = this.value.slice(from);
  this.value = k;
  console.log(this.value);
  return this;
};
let strBuilder = new StringBuilder(`Hello`);
console.log(strBuilder);
strBuilder
  .plus(` all`, `!`)
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove(`l`)
  .sub(1, 1)
  .get();
console.log(StringBuilder instanceof Builder);
console.log(strBuilder instanceof StringBuilder);
/////////////////////////////////////////////
