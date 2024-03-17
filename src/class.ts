import { TUser } from './interface.js';

// ES
export class User implements TUser {
  static brand = 'ISDI';

  static foo = function () {
    console.log('Método estático');
  };

  public name: string;
  public age: number;
  private surname?: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  }
}

const user1 = new User('Pepe', 33);
const user2 = new User('Ernestina', 22);
const user3 = new User('Ramon', 44);

user1.greeting();
user2.greeting();

console.log(User.brand);

User.foo();
// Error user1.surname = 'Perez';
// Erorr delete user1.age;

console.log(user1);
console.log(user2);
console.log(user3);

export class Student extends User {
  course: string;
  constructor(name: string, age: number, course = 'Angular') {
    super(name, age);
    this.course = course;
  }

  greeting() {
    super.greeting();
    console.log(`Estudio ${this.course}`);
  }
}

const s1 = new Student('Elena', 34, 'Node');
s1.greeting();
console.log(s1);
