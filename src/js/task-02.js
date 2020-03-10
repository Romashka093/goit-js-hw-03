'use strict';

console.warn('TASK-02');

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = obj => {
  const countOfProps = Object.keys(obj).length;
  return { countOfProps };
};

// Вызовы функции для проверки работоспособности реализации.

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
