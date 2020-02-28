'use strict';

console.warn('TASK-05');

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// OPTION-02

const getAllPropValues = function(array, prop) {
  const values = [];

  for (const product of array) {
    if (prop in product) {
      values.push(product[prop]);
    }
  }
  return values;
};

// // OPTION - 01;

// const getAllPropValues = function(array, prop) {
//   const value = [];
//   for (const arr of array) {
//     const keys = Object.keys(arr);

//     for (const key of keys) {
//       if (prop === key) {
//         const allPropValues = arr[key];
//         value.push(allPropValues);
//       }
//     }
//   }
//   return value;
// };

// Вызовы функции для проверки работоспособности реализации.

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
