import { add, foo } from './module.js';

let str = 'Hello, World!';
// Tipado estático: no se puede cambiar el tipo de una variable
// Error str = 5
// Tipado fuerte: puede ser explicito
let str2: string;
// Error str2 = 2;

//  Dos formas de asignar un tipo a una variable
// - Explicito
// - Inferido (Implícito)

// Explicito
let num: number;

// Inferido
let num2 = 5;

try {
  console.log(add(3, 'pepe'));
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// Tipos de datos primitivos
// - number
// - string
// - boolean
// - null
// - undefined
// - symbol
// - bigint

// Union types

let numOrStr: number | string;

numOrStr = 5;
numOrStr = 'Pepe';

let x: number | null = null;
x = 3;

// Type aliases

type NumOrStr = number | string;
let numOrStr2: NumOrStr;

type UserName = string;
let userName: UserName;

// Tipos de datos compuestos
// - array
// - object
// - function

// Array
let arr: number[] = [];
arr.push(3);
arr.push(5);
// Error arr.push('pepe');

let arr2: Array<number> = [];

type User = {
  name: string;
  age: number;
  code?: string;
};

// Object
let obj: object = {};
// Error obj = 3;
obj = { name: 'Pepe' };
// Error obj.age = 23;

let user1: User;
user1 = { name: 'Pepe', age: 23 };

const user2: User = {
  name: 'Pepe',
  age: 23,
};

user2.code = '1234';
delete user2.code;

// Function
let fn: Function = () => {};

let fn2: (a: number, b: number) => number;

console.log(foo(3, 5, (a) => a));
