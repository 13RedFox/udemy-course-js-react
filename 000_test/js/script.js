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
/*
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
*/

// ! Динамическая типизация
/*
// ? To string

// * 1)
console.log(typeof(String(null))); // * string
console.log(typeof(String(4))); // * string

// * 2)
console.log(typeof( 5 + '')); // * string При сложении со строкой получается строка.

const num = 5;
console.log('https://vk.com/catalog/' + num); //  https://vk.com/catalog/5

const fontSize = 26 + 'px'; // * '26px'

// ? To number

// * 1)
console.log(typeof(Number('4'))); // * number

// * 2)
console.log(typeof(+'5')); // * number

// * 3)
console.log(typeof(parseInt('15px', 10))); // * number

let answ = +prompt('Hello', ''); // * для введения чисел ставится знак + перед свойством +prompt()...

// ? To boolean

// * Всегда будет false:
// ! 0, '', null, undefined, NaN = false;

// * 1)
let switcher = null;

if (switcher) { // switther = null => false и программа не запуститься.
  console.log('Working...');
}

switcher = 1;

if (switcher) { // switther = 1 => true и программа запуститься.
  console.log('Working...');
}

// * 2)
console.log(typeof(Boolean('4'))); // * boolean Используют практически некогда!

// * 3)
console.log(typeof(!!'44444')); // * boolean Очень редкий прием, можно встретить в единичных скриптах.
*/

// ! Получение информации со страницы DOM
/*

// * Старые методы использования
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');

console.log(box);
console.log(btns[1]);
console.log(circle);

// *  Новые методы использования
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
  console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

box.style.backgroundColor = 'yellow';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; height: 100px;'

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// ! const text = document.createTextNode('Тут был я'); // * этот элемент используется очень редко!

div.classList.add('black');

wrapper.append(div); // * в конец родителя помещает див
// wrapper.appendChild(div); // * Старый метод
// wrapper.prepend(div); // * в начало родителя помещает див
circle[0].remove();

hearts[0].replaceWith(circle[0]);

div.innerHTML = '<h1>Hello world</h1>'; // * Работает и с текстом и с тегами
// div.textContent = 'Hello'; // * Работает только с текстом

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // * beforebegin, afterbegin, beforeend, afterend
*/
// ! .classList и Делегирование событий!
// ? .classList

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('pink'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));
//
// if (btns[1].classList.contains('pink')) {
//   console.log('pink');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('pink')) {
  //   btns[1].classList.add('pink');
  // } else {
  //   btns[1].classList.remove('pink');
  // }
  // ! такое же действие делает как и в условии выше
  btns[1].classList.toggle('pink');
})

// ? Делегирование событий
wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {
    console.log('Hello')
  }
});

const btn = document.createElement('button');
btn.classList.add('pink');
wrapper.append(btn);
