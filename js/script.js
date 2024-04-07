//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
// let name = "Іван";
// let city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
//console.log(`привіт ${"name"}`);// привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
// console.log(Number(a));
// console.log(parseInt(b));
// console.log(parseFloat(c));

// //***4***
// let a = 0.1 + 0.2;
// if (a !== 3) {
//   console.log(typeof a);
// }

//***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let obj = {};
// obj.name = "Ivan";
// obj.age = 28;
// obj.city = "Kyiv";
// console.log(obj);
// delete obj.city;
// console.log(obj);
// obj["like flowers"] = true;
// console.log(obj);

//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

// Дз 2 урок
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// const zero = -3;

// const number = zero >= 0 ? true : false;
// console.log(number);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const disability = "test";

// if (disability === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number = 10;

// if (number > 10) {
//   number = number - 5;
//   console.log(number);
// } else if (number < 10) {
//   number = number + 5;
//   console.log(number);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const service = Math.floor(Math.random() * (12 - 1) + 1);
// // console.log(service);

// switch (service) {
//   case 1:
//     console.log(`Month now = january`);
//     break;
//   case 2:
//     console.log(`Month now = february`);
//     break;
//   case 3:
//     console.log(`Month now = march`);
//     break;
//   case 4:
//     console.log(`Month now = april`);
//     break;
//   case 5:
//     console.log(`Month now = may`);
//     break;
//   case 6:
//     console.log(`Month now = june`);
//     break;
//   case 7:
//     console.log(`Month now = july`);
//     break;
//   case 8:
//     console.log(`Month now = august`);
//     break;
//   case 9:
//     console.log(`Month now = september`);
//     break;
//   case 10:
//     console.log(`Month now = october`);
//     break;
//   case 11:
//     console.log(`Month now = nowember`);
//     break;
//   case 12:
//     console.log(`Month now = december`);
//     break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = Math.floor(Math.random() * (999 - 99) + 99);
// console.log(number);

//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let fruits = fruts.map((fruit) => {
//   let names = { name: fruit.name };
//   return names;
// });
// console.log(fruits);
//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let a = 2; a <= 10; a += 1) {
//   if (a % 2 !== 0) {
//     continue;
//   }
//   console.log(a);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }
// let i = 1;
// while (i < 5) {
//   i += 1;
//   console.log(`цифра ${i}!`);
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// for (let a = 1; a <= 1000; a += 1) {
//   let answear = prompt("Введіть число більше за 100");
//   if (answear === null || answear === "") {
//     alert("закрито");
//     break;
//   } else if (answear < 100) {
//     alert("Введіть число більше за 100! Введіть ще раз!");
//     continue;
//   } else if (answear > 100) {
//     alert("Congratulations");
//     break;
//   }
// }

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

const result = girls.filter((girl) => girls.age > 20);

console.log(girls);
