'use strict';

// ! Основы JavaScript:
// ? Условия:
// * Условия if => else:
/*
// TODO: => Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// TODO: => Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
let ask = prompt('Какое официальное название JavaScript?', '');

if (ask === 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}
// TODO: => Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// TODO: =>  1, если значение больше нуля,
// TODO: => -1, если значение меньше нуля,
// TODO: =>  0, если значение равно нулю.
// TODO: =>  Предполагается, что пользователь вводит только числа.

let value = +prompt('Введите число', '');

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}
// TODO: => => Перепишите if с использованием условного оператора '?':

let result = (a + b < 4) ? 'Мало' : 'Много';

// TODO: => Перепишите 'if..else' в '?'
let message = (login === 'Сотрудник') ? 'Привет' :
              (login === 'Директор') ? 'Здравствуйте' :
              (login === '') ? 'Нет логина' : '';
*/
// * Условия. Логические операторы: ( ||, &&, ! )

// * ( || ) => Если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.
// * ( && ) => Возвращает первое ложное(false) значение. Или последнее, если ничего не найдено.
// * Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше.
// * ( ! ) => Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.
/*
// TODO: => Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// TODO: => «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 20;

if (age >= 14 || age <= 90) {
    console.log(age);
}

// TODO: => Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// TODO: => Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = 20;

if (!(age >= 14 && age <= 90)) {
  console.log(age);
}
if (age < 14 && age > 90) {
  console.log(age);
}

// TODO: => Напишите код, который будет спрашивать логин с помощью prompt.
// TODO: => Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено»,
// TODO: => в противном случае отобразить «Я вас не знаю».
// TODO: => Пароль проверять так:
// TODO: => Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// TODO: => Иначе – «Неверный пароль»,
// TODO: => При отмене – «Отменено».

const value = prompt('Введите логин', '');

if (value === 'Админ') {

  const password = prompt('Введите пароль', '');

    if (password === 'Я главный') {
      alert('Здравствуйте');
    } else if (password === '' || password === null) {
      alert('Отменено');
    } else {
      alert('Неверный пароль');
    }

} else if (value === '' || value === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
*/
// ? Циклы: => while и for
// * Цикл while:
// !                       while (condition) {
// *                         код
// *                         также называемый "телом цикла"
// !                       }
/*
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}*/
// * Цикл do…while:
// !                      do {
// *                        тело цикла
// !                      } while (condition);
// * На практике чаще используется форма с предусловием: while(…) {…}.

/*
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
*/
// * Цикл for:
// !                       for (начало; условие; шаг) {
// *                         ... тело цикла ...
// !                       }
/*
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}
*/
// * => while – Проверяет условие перед каждой итерацией.
// * => do..while – Проверяет условие после каждой итерации.
// * => for (;;) – Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.

// TODO: => При помощи цикла for выведите чётные числа от 2 до 10.
/*
for (let i = 2; i <= 10; i++) {
  if (i % 2) {
    continue;
  }
  console.log(i);
}

// TODO: => Перепишите код, заменив цикл for на while, без изменения поведения цикла.

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// TODO: => Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// TODO: => Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// TODO: => Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let num;

do {
  num = +prompt('Введите число больше 100', 0);
} while (num <= 100 && num);
*/
// * Конструкция "switch"
/*
let browser = prompt('Введите браузер', '');

if (browser === 'Edge') {
  alert('You\'ve got the Edge!');
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert('Okay we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
  case 1:
    alert('Вы ввели число 1');
    break;
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
*/
// ? Функции:
// * => Function Declaration (Объявление Функции):
// *    Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).
// !    function sum(a, b) {
// !      return a + b;
// !    }

// TODO: => Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(1,1));

// TODO: => Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

let x  = +prompt('Введите число x','');
let n = +prompt('Введите число n', '');
function pow(x, n) {
  return x ** n;
}
console.log(pow(x, n));
*/
// * => Function Expression (Функциональное Выражение)
// *    Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// !    let sum = function(a, b) {
// !      return a + b;
// !    };

// * => Arrow Function (Стрелочные функции)
// *    Краткий синтаксис для создания функций, который часто лучше, чем синтаксис Function Expression.
// !    let sum = (a, b) => a + b;
// *    Более короткая форма записи функции:
// !    let sum = function(a, b) {
// !      return a + b;
// !    };
// !    alert( sum(1, 2) ); // 3

// TODO: => Замените код Function Expression стрелочной функцией:
/*
let ask = (question,yes,no) => (confirm(question)) ? yes() : no()

ask(
  'Вы согласны?',
  () => alert('Вы согласились'),
  () => alert('Вы отменили выполнение')
);
*/
// ? ООП:
// * => Объекты {}

// * => Цикл «for…in»
// !    for (key in object) {
// !      тело цикла выполняется для каждого свойства объекта
// !    }
// *  часто используется вариант "for (let prop in obj)"
// !    let user = {
// !      name: "John",
// !      age: 30,
// !      isAdmin: true
// !    };

// !    for (let key in user) {
// *      // ключи
// !      alert( key );  // name, age, isAdmin
// *      // значения ключей
// !      alert( user[key] ); // John, 30, true
// !    }

// * => Клонирование и объединение объектов, Object.assign
// *    Object.assign(dest, [src1, src2, src3...])
// *    Аргументы dest, и src1, ..., srcN (может быть столько, сколько нужно) являются объектами.
// *    Метод копирует свойства всех объектов src1, ..., srcN в объект dest. То есть, свойства всех перечисленных объектов,
// *    начиная со второго, копируются в первый объект. После копирования метод возвращает объект dest.
// TODO => Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
/*
let schedule = {};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(schedule));

// TODO => Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// TODO => Если объект salaries пуст, то результат должен быть 0.

let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

for (let key in salaries ) {
  sum += salaries[key];
}

console.log(sum);
*/
