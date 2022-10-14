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

// _________________________________________________________________________________________________________
// Не отправленное на проверку!!!

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// function number(str) {
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "5") {
//       arr[i - 1] = "0";
//       arr[i] = "1";
//     }
//   }
//   console.log(arr);
// }
// number("23456753");

// Определите площадь самого большого квадрата, который может поместиться внутри круга радиусом r.
// function squer(r) {
//   const a = (2 * r) / Math.sqrt(2);
//   const s = a * a;
//   console.log(s);
// }
// squer(10);

// Определите общее количество цифр в целом числе (n>=0), заданном в качестве входных данных для функции.
//  Например, 9 - это одна цифра, 66 состоит из 2 цифр, а 128685 состоит из 6 цифр. Будьте осторожны, чтобы избежать переполнения / недонаполнения.
// function quantity(number) {
//   let str = String(number);
//   const length = str.length;
//   console.log(length);
// }
// quantity(11000);

// Очень просто, учитывая целое число или число с плавающей запятой, найдите его противоположность
// function opposite(number) {
//   const res = -number;
//   console.log(res);
// }
// opposite(-12.5);

// Последовательность периметра
// Показаны первые три этапа последовательности.

// блоки

// Размер блока равен a на a и a ≥ 1.

// Каков периметр n-й фигуры в последовательности (n ≥ 1)?

// function perimetr(n, a) {
//   const perimetr = 4 * a;
//   const result = n * perimetr;
//   console.log(result);
// }
// perimetr(5, 10);

// Это довольно просто. Ваша цель - создать функцию, которая удаляет первый и последний символы строки.
//  Вам дается один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.
// function remove(str) {
//   let arr = str.split("");
//   arr.pop();
//   arr.shift();
//   str = arr.join("");

//   console.log(str);
// }
// remove("werrttv rttyy");

// Завершите решение так, чтобы оно возвращало значение true, если переданный первый аргумент (строка) заканчивается 2-м аргументом (также строкой).
// function end(str1, str2) {
//   if (
//     str1.indexOf(str2) != -1 &&
//     str1[str1.length - 1] === str2[str2.length - 1]
//   ) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// end("aassdd", "sdd");

// Write a function that accepts an integer n and a string s as parameters,
//  and returns a string of s repeated exactly n times.
// function repeat(n, s) {
//   s = s.repeat(n);
//   console.log(s);
// }
// repeat(5, "sse ");

// function repeat(n, s) {
//   let str = "";
//   for (let i = n; i > 0; i--) {
//     str = str + s;
//   }
//   console.log(str);
// }
// repeat(3, "sse ");

// function repeatString(str, count) {
//   if (count <= 0) return "";
//   if (count === 1) return str;
//   else return str + repeatString(str, count - 1);
// }
// console.log(repeatString("Строка", 5));

// Если указано число от 0 до 9, верните его прописью.

// Ввод :: 1

// Вывод :: "Один".

// Если ваш язык поддерживает это, попробуйте использовать оператор switch.

// const n = 9;
// switch (n) {
//   case 1:
//     console.log("один");
//     break;
//   case 2:
//     console.log("два");
//     break;
//   case 3:
//     console.log("три");
//     break;
//   case 4:
//     console.log("четыре");
//     break;
//   case 5:
//     console.log("пять");
//     break;
//   case 6:
//     console.log("шесть");
//     break;
//   case 7:
//     console.log("семь");
//     break;
//   case 8:
//     console.log("восемь");
//     break;
//   case 9:
//     console.log("девять");
//     break;
// }

// Вы пишете код для управления светофорами вашего города. Вам нужна функция для обработки каждого изменения с зеленого на желтый, на красный, а затем снова на зеленый.

// Завершите функцию, которая принимает строку в качестве аргумента, представляющего текущее состояние источника света, и возвращает строку, представляющую состояние, в которое должен перейти источник света.

// Например, когда входной сигнал зеленый, выходной сигнал должен быть желтым.

// function color(str) {
//   switch (str) {
//     case "жёлтый":
//       console.log("красный");
//       break;
//     case "красный":
//       console.log("зелёный");
//       break;
//     case "зелёный":
//       console.log("желтый");
//       break;
//   }
// }
// color("жёлтый");

// Вам даны два внутренних угла (в градусах) треугольника.

// Напишите функцию для возврата 3-го числа.

// Примечание: будут проверяться только положительные целые числа.

// https://en.wikipedia.org/wiki/Triangle

// function angle(a, b) {
//   let c = null;
//   if (a > 0 && b > 0) {
//     c = 180 - (a + b);
//   }
//   console.log(c);
// }
// angle(60, 45);

// Каждый день аренды автомобиля стоит 40 долларов. Если вы арендуете автомобиль на 7 или более дней, вы получаете 50 долларов от общей суммы. В качестве альтернативы, если вы арендуете автомобиль на 3 или более дней, вы получаете 20 долларов от общей суммы.

// Напишите код, который выдает общую сумму за разные дни(d).
// function summ(d) {
//   let res = d * 40;
//   if (d >= 3 && d < 7) {
//     res = res - 20;
//   }
//   if (d >= 7) {
//     res = res - 50;
//   }
//   if (d < 3) {
//     res = res;
//   }
//   console.log(res);
// }
// summ(3);

// Вы были в походе со своими друзьями далеко от дома, но когда приходит время возвращаться, вы понимаете, что ваше топливо на исходе, а ближайшая заправка находится в 50 милях отсюда! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона.

// Учитывая эти факторы, напишите функцию, которая сообщает вам, возможно ли добраться до насоса или нет.

// Функция должна возвращать значение true, если это возможно, и false, если нет.
// function rastoya(rast, fuel, consump) {
//   if (rast <= fuel * consump) {
//     console.log("true");
//   } else console.log("false");
// }
// rastoya(76, 3, 25);

// _____________________________________________________________
// Второй блок задач codewars
