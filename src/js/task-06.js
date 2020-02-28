'use strict';

console.warn('TASK-06');

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
  let productTotalPrice = 0;

  for (let product of allProdcuts) {
    if (productName === product.name) {
      productTotalPrice = product.quantity * product.price;
    }
  }
  return productTotalPrice;
};

// Вызовы функции для проверки работоспособности реализации.

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
