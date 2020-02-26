'use strict';

console.warn('TASK-01');

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// option-02, used Object.keys:

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// // option-01, used Object.entries:

// const entries = Object.entries(user);

// for (const item of entries) {
//   const key = item[0];
//   const value = item[1];

//   console.log(`${key}: ${value}`);
// }
