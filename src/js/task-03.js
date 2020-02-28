'use strict';

console.warn('TASK-03');

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя
// самого продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// option-01

const findBestEmployee = function(employees) {
  let tasksOfBestEmployee = 0;
  let nameOfBestEmployee;
  const keys = Object.keys(employees);

  for (const key of keys) {
    if (tasksOfBestEmployee < employees[key]) {
      tasksOfBestEmployee = employees[key];
      nameOfBestEmployee = key;
    }
  }
  return { nameOfBestEmployee };
};

// // option-02

// const findBestEmployee = function(employees) {
//   const values = Object.values(employees);
//   console.log(values);
//   const keys = Object.keys(employees);
//   console.log(keys);
//   const tasksOfBestEmployee = Math.max(...values);

//   return tasksOfBestEmployee;
// };

// // LAST OPTION - let's whatch video with Repeta

// const findBestEmployee = function(employees) {
//   let maxTasks = 0;
//   let bestEmployee;

//   const values = Object.entries(employees);
//   console.log(values);

//   const tasksOfBestEmployee = Math.max(...values);
//   console.log(tasksOfBestEmployee);

//   for (const key in employees) {
//     if (employees.hasOwnProperty(key)) {
//       const element = employees[key];
//       // console.log(element);
//       if (maxTasks < element) {
//         bestEmployee = element;
//       }
//     }
//     return bestEmployee;
//   }

// };

// Вызовы функции для проверки работоспособности реализации.

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
