// 1.  С помощью prompt() спросить у пользователя длину и ширину прямоугольника, сохранить эти значения в переменные width и length. После этого высчитайте площадь прямоугольника,
//  его периметр и выведите результаты в консоль. Если длина и ширина равны, то дополнительно сообщите в консоли, что перед нами квадрат.
// const width = prompt("ширина");
// const length = prompt("длина");
// const s = width * length;
// const p = 2 * width + 2 * length;
// let t = "";
// if (width === length) {
//   t = "квадрат";
// } else {
//   t = "";
// }
// console.log(" Площадь=", s, "\n", "Периметр=", p, "\n", t);

// 2.  С помощью prompt() спросить у пользователя номер месяца, затем необходимо преобразовать к числу и сохранить в переменную month.
//  Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). Решите задачу через if/else, а затем придумайте еще один способ решения.

// const month = Number(prompt("Укажите номер месяца"));
// let p = "";
// if (month === 12 || (month >= 1 && month <= 2)) {
//   p = "зима";
// }
// if (month >= 3 && month <= 5) {
//   p = "весна";
// }
// if (month >= 6 && month <= 8) {
//   p = "лето";
// }
// if (month >= 9 && month <= 11) {
//   p = "осень";
// }
// console.log(p);

// const month = Number(prompt("Укажите номер месяца"));
// let p = "";
// switch (month) {
//   case 12:
//     p = "зима";

//     break;
//   case 1:
//     p = "зима";

//     break;
//   case 2:
//     p = "зима";

//     break;
//   case 3:
//     p = "весна";

//     break;
//   case 4:
//     p = "весна";

//     break;
//   case 5:
//     p = "весна";

//     break;
//   case 6:
//     p = "лето";

//     break;
//   case 7:
//     p = "лето";

//     break;
//   case 8:
//     p = "лето";

//     break;
//   case 9:
//     p = "осень";

//     break;
//   case 10:
//     p = "осень";

//     break;
//   case 11:
//     p = "осень";

//     break;

//   default:
//     break;
// }
// console.log(p);

// 3.  С помощью prompt() спросить у пользователя число, сохранить в переменную num.
// Написать скрипт, который проверит число и выведет в консоль одной форматированной строкой информацию об этом числе в виде (одним console.log):
// 1) четное или нет
// 2) целое или дробное
// 3) отрицательное или положительное
// Не забываем, что число 0 тоже должно обрабатываться.

// const num = Number(prompt("Напишите число"));
// let even;
// let integer;
// let positive;
// if (num % 2 === 0) {
//   even = "четное";
// } else {
//   even = "не четное";
// }
// if (num % 1 === 0) {
//   integer = "целое";
// } else {
//   integer = "дробное";
// }
// if (num >= 0) {
//   positive = "положительное";
// } else {
//   positive = "отрицательное";
// }
// console.log("Число ", even, " ", integer, " ", positive);

// Practical task #2 (cycles)
// Задание:
// Создаем javascript-сценарий, выполняющий следующие задачи:
// 1.  Используя цикл while вывести в консоль строку, которая содержит символы “|” (вертикальная полоса) и “_” (нижнее подчеркивание)
// и выглядит в итоге как треугольник следующего вида:

// let str = "";
// while (str.length < 20) {
//   str = str + "|_";
//   console.log(str);
// }

// 2. Используя двойной цикл for сформируйте строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки “\n”.
// На каждой позиции этой решетки должен быть либо белый квадрат (символ “\u2B1C”),
// либо черный квадрат (символ “\u2B1B”). Вывод строки делать одним единственным вызовом console.log().
// В результате должны увидеть шахматную доску следующего вида:

// let a = "\u2B1C";
// let b = "\u2B1B";
// let str = "";
// let result = "";
// let c;
// for (let i = 1; i < 5; i++) {
//   str += "\n" + "\n";
//   for (let j = 1; j < 9; j++) {
//     if (j % 2 != 0) {
//       str = str + a;
//     } else {
//       str = str + b;
//     }
//   }
//   str += "\n" + "\n";
//   for (let k = 1; k < 9; k++) {
//     if (k % 2 == 0) {
//       str += a;
//     } else {
//       str += b;
//     }
//   }
// }
// console.log(str);

// Practical task #3 (fizzbuzz)

// Задание:
// Создаем javascript-сценарий (можно использовать просто тег script), в котором необходимо реализовать функцию fizzBuzz()*, выполняющую вывод в консоль чисел от 1 до 100, но с условиями:
// a.  если число кратно 3, то вместо числа вывести Fizz.
// b.  если кратно 5, то вывести вместо числа Buzz.
// c.  если число кратно 3 и 5 одновременно, то вывести вместо числа FizzBuzz.

// *В теле функции нельзя использовать множественный for, множественный while (т.е. только один цикл для вывода элементов от 1 до 100), if, switch, тернарный оператор (a?b:c)!

// function fizzBuzz(a, b) {
//   let num = 0;
//   for (let i = a - 1; i < b; i++) {
//     num = i + 1;
//     if (num % 3 === 0 && num % 5 === 0) {
//       num = "fizBuzz";
//     }
//     if (num % 3 === 0) {
//       num = "fizz";
//     }
//     if (num % 5 === 0) {
//       num = "Buzz";
//     }

//     console.log(num);
//   }
// }
// fizzBuzz(1, 100);

// Practical task #4 (quadratic)

// Задание:
// Создаем javascript-сценарий  и пишем функцию quadraticEquation(), которая на вход принимает коэффициенты квадратного уравнения, а возвращает вещественные корни этого уравнения или сообщает об их отсутствии. Обратите внимание на вывод ответов: очень важно соблюсти знаки сложения\вычитания.

// Пример:
// 1.  Вызов:
// quadraticEquation(1, -8, 72);

// Результат в консоли:
// уравнение x^2 - 8x + 72 = 0 не имеет вещественных корней

// 2.  Вызов:
// quadraticEquation(1, 12, 36);

// Результат в консоли:
// уравнение x^2 + 12x + 36 = 0 имеет один корень x = -6

// 3.  Вызов:
// quadraticEquation(4, -8, 1);

// Результат в консоли:
// уравнение 4х^2 – 8x + 1 = 0 имеет корни x1 = 1.8660254037844386 и x2 = 0.1339745962155614

// function quadraticEquation(a, b, c) {
//   let D = b ** 2 - 4 * a * c;
//   let x1 = "нет корней";
//   let x2 = "нет корней";
//   if (D < 0) {
//     console.log(x1);
//   }
//   if (D == 0) {
//     x1 = -b / (2 * a);
//     console.log("Корень x=", x1);
//   }
//   if (D > 0) {
//     x1 = (-b - Math.sqrt(D)) / (2 * a);
//     x2 = (-b + Math.sqrt(D)) / (2 * a);
//     console.log(" Корень x1=", x1, "\n", "Корень x2=", x2);
//   }
// }
// quadraticEquation(4, -8, 1);

// функция для заглавной строки, т.е сделать первый символ в строке заглавным.
// function capital_letter(str) {
//   let arr = str.split("");
//   arr[0] = arr[0].toUpperCase();
//   let result = arr.join("");
//   console.log(result);
// }
// capital_letter("привет");

// function capital_letter(str) {
//   let result = str.charAt(0).toUpperCase() + str.slice(1);
//   console.log(result);
// }
// capital_letter("привет");

// We need a function that can transform a number (integer) into a string.
// function string(number) {
//   const str = String(number);
//   console.log(str);
//   console.log(typeof str);
// }
// string(123);

// Учитывая неотрицательное целое число n,
// напишите функцию to_binary/To Binary, которая возвращает число в двоичном формате.
// function to_binary(number) {
//   let bin = "";
//   let binary;
//   while (number >= 1) {
//     if (number % 2 !== 0) {
//       bin += 1;
//       number = (number - 1) / 2;
//     } else {
//       bin += 0;
//       number = number / 2;
//     }
//   }
//   binary = bin.split("").reverse().join("");
//   console.log(binary);
// }
// to_binary(10);
