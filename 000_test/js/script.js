"use strict";

/*
const str = 'TeSt';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';
console.log(logg.slice(0, 5));
console.log(logg.substr(0, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));
*/

// ! Объекты
/*
const options = {
  width: 1024,
  height: 1024,
  name: 'test',
  bool: false,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('Test');
  }
};

options.makeTest();

// Деструктиризация
const {border, bg} = options.colors;
console.log(border);

console.log(options);

delete options.bool;

let counter = 0;

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойства ${key} имеет значение ${options[key]}`);
    counter++;
  }
}

console.log(counter);

console.log(Object.keys(options).length);
*/

/*
// ! 1.Напишите код, выполнив задание из каждого пункта отдельной строкой:

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// * DONE!
// ! 2. У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

// * DONE!
*/

// ! Массивы:
/*
const arr = [3, 2, 1, 5, 4];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
*/

/*
arr.pop(); // Удаляет последний элемент массива.
arr.push(10); // Добавляет элемент в конец массива.
arr.shift(); // Удаляет первый элемент массива.
arr.unshift(10); // Добавляет элемент в начало массива

// * Перебор массива через цикл
for (let i= 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// * Метод перебора массива for-of Вернет точно такое же как и обычный перебор массива через цикл.
for (let value of arr) {
  console.log(value);
}
*/

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort(); // * Сортирует массив
// console.log(products.join('; '));

// ! Копирование объектов
/*
const obj = {
  a: 5,
  b: 1
};

//const copy = obj;

//copy.a = 10;
//console.log(copy);
//console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'qwerty';

console.log(newArray);
console.log(oldArray);
// !. 4. Spreds
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAaray = [...array];

console.log(newAaray);

const q = {
  one: 1,
  two: 2
};

const newObj = {...q};
*/

// ! Основы ООП

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
  healthy: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};

// const john = {
//   healthy: 100
// };

const john = Object.create(soldier);

john.__proto__ = soldier; // ! Старый формат, не желательно использовать!

Object.setPrototypeOf(john, soldier); // ! Эта запись идентична записи на строке 246. Новый формат для использования!

console.log(john);
john.sayHello();
