// 1.  С помощью prompt() спросить у пользователя длину и ширину прямоугольника, сохранить эти значения в переменные width и length. После этого высчитайте площадь прямоугольника,
//  его периметр и выведите результаты в консоль. Если длина и ширина равны, то дополнительно сообщите в консоли, что перед нами квадрат.
// const width = prompt("ширина");
// const length = prompt("длина");
// const s = width * length;
// const p = 2 * width + 2 * length;
// let t = "";
// if (width === length) {
//   t = " квадрат";
// } else {
//   t = "";
// }
// console.log(` Площадь=${s}\nПериметр= ${p} \n ${t}`);

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
// month === 12 || (month >= 1 && month <= 2)
//   ? (p = "зима")
//   : month >= 3 && month <= 5
//   ? (p = "весна")
//   : month >= 6 && month <= 8
//   ? (p = "лето")
//   : (p = "осень");

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
// console.log(`Число ${even} ${integer} ${positive}`);

// Practical task #2 (cycles)
// Задание:
// Создаем javascript-сценарий, выполняющий следующие задачи:
// 1.  Используя цикл while вывести в консоль строку, которая содержит символы “|” (вертикальная полоса) и “_” (нижнее подчеркивание)
// и выглядит в итоге как треугольник следующего вида:
// const input = "|_";
// let str = "";
// let i = 0;
// while (i <= 10) {
//   str += input.repeat(i) + " \n";
//   i++;
// }
// console.log(str);

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

// let a = "\u2B1C";
// let b = "\u2B1B";
// let c;
// let str = "";

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     c = a;
//     a = b;
//     b = c;
//   } else {
//     b = a;
//     a = c;
//   }
//   str += "\n" + "\n";
//   for (let j = 0; j < 10; j++) {
//     if (j % 2 != 0) {
//       str = str + a;
//     } else {
//       str = str + b;
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
//     num % 3 === 0 && num % 5 === 0
//       ? (num = "fizBuzz")
//       : num % 3 === 0
//       ? (num = "fizz")
//       : num % 5 === 0
//       ? (num = "Buzz")
//       : num;
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
//   let x1 = `уравнение ${a}x^2+${b}x+${c}=0 не имеет вещественных корней`;
//   let x2 = "нет корней";
//   if (D < 0) {
//     console.log(x1);
//   }
//   if (D == 0) {
//     x1 = -b / (2 * a);
//     console.log(`уравнение ${a}x^2+${b}x+${c}=0 имеет один корень x= ${x1}`);
//   }
//   if (D > 0) {
//     x1 = (-b - Math.sqrt(D)) / (2 * a);
//     x2 = (-b + Math.sqrt(D)) / (2 * a);
//     console.log(`уравнение ${a}x^2+${b}x+${c}=0 имеет корни x1=${x1} и x2=${x2}`);
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

// Задание:
// В папке Task1 создаем файл compression.html, в котором в js-скрипте создаем две функции compress() и uncompress(), которые будут выполнять следующее:

// Примеры:
// 1.	Вызов:
// compress("a");
// Результат в консоли:
// “a” => “a”
// 2.	Вызов:
// compress("aaa");
// Результат в консоли:
// “aaa” => “a3”
// 3.	Вызов:
// compress("aabbb");
// Результат в консоли:
// “aabbb” => “a2b3”
// 4.	Вызов:
// compress("fffdccbbb");
// Результат в консоли:
// “fffdccbbb ” => “f3d1c2b3”
// 5.	Вызов:
// uncompress("a");
// Результат в консоли:
// “a” => “a”
// 6.	Вызов:
// uncompress("a5");
// Результат в консоли:
// “a5” => “aaaaa”
// 7.	Вызов:
// uncompress("a2b3");
// Результат в консоли:
// “a2b3” => “aabbb”
// 8.	Вызов:
// uncompress("a12b1c3");
// Результат в консоли:
// “a12b1c3” => “aaaaaaaaaaaabccc”

// function compress(str) {
//   let arr = str.split("");
//   let obj = {};
//   result = "";

//   arr.map((elem) => {
//     obj[elem] = obj[elem] + 1 || 1;
//   });

//   let newArr = Object.entries(obj);

//   newArr.map((elem) => {
//     result += elem.join("");
//   });
//   console.log(`${str}=>${result}`);
// }
// compress("aaabb");

// function uncompress(str) {
//   let arr = str.split("");
//   let result = "";
//     for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       result += arr[i].repeat(Number(arr[i + 1]));
//     }
//   }
//   console.log(`${str}=>${result}`);
// }
// uncompress("a3b2");

// function uncompress(str) {
//   const arr = str.split("");
//   let result = "";
//   arr.forEach((elem, index, array) => {
//     if (!(index % 2)) {
//       result += elem.repeat(Number(array[index + 1]));
//     }
//   });
//   console.log(`${str}=>${result}`);
// }
// uncompress("a3b2");

// Задание:
// В папке Task1 создаем файл countVowels.html и создаем функцию countVowelLetters(), которая будет возвращать количество русских гласных букв в строке, которая будет являться аргументом функции. Не использовать switch, вложенные циклы, регулярные выражения или if’ы на каждую букву для проверок… Можно использовать методы строк, массивы или хеши для решения задачи.

// Пример:
// 1.	Вызов:
// countVowelLetters(“Пришла зима, запахло…”);
// Результат в консоли:
// Количество гласных = 7

// 2.	Вызов:
// countVowelLetters(“Ghbdtn, z r dfv bp Hjccbb”);
// Результат в консоли:
// Количество гласных = 0

// 3.	Вызов:
// countVowelLetters(“длинношеее”);
// Результат в консоли:
// Количество гласных = 5

// 4.	Вызов:
// countVowelLetters(“Не будете ли Вы так любезны, Иван, передать мне блокнот и «Известия»”);
// Результат в консоли:
// Количество гласных = 23

// 5.	Вызов:
// countVowelLetters(“Архангел Уриил”);
// Результат в консоли:
// Количество гласных = 6

// function countVowelLetters(str) {
//   const vowels = "ауоыиэяюёе";
//   let quant = 0;
//   let pos = -1;
//   for (let i = 0; i < vowels.length; i++) {
//     while ((pos = str.indexOf(vowels[i], pos + 1)) != -1) {
//       quant++;
//     }
//   }
//   return quant
// }
// console.log(countVowelLetters("пришла зима, запахло"));

// function countVowelLetters(str) {
//   let vowels = "ауоыиэяюёе";
//   let objVowels = {};
//   let objStr = {};
//   let objRes = {};
//   let arrRes = [];
//   vowels = vowels.split("");
//   let arr = str.split("");
//   let quant = 0;
//   vowels.forEach((elem) => {
//     objVowels[elem] = objVowels[elem] + 1 || 1;
//   });
//   arr.forEach((elem) => {
//     objStr[elem] = objStr[elem] + 1 || 1;
//   });
//   for (key in objVowels) {
//     objRes[key] = objStr[key];
//   }
//   arrRes = Object.values(objRes);
//   arrRes.forEach((elem) => {
//     quant += elem || 0;
//   });

//   return quant;
// }
// console.log(countVowelLetters("пришла зима, запахло"));

// Задание:
// В папке Task2 создаем файл methods.html, в котором реализуем следующий функционал:
// 1.	На входе имеем массив простых чисел (например, numbers). Нужно описать функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. Для решения использовать метод reduce().
// Т.е. для массива numbers = [2, 3, 5, 7, 11, 13, 17] мы должны увидеть в консоли, вызвав currentSums(numbers):

// [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [2, 5, 10, 17, 28, 41, 58]

// function currentSums(numbers) {
//   let arr = [];
//   let res = [];
//   numbers.reduce((sum, elem, i) => {
//     if (i == 0) {
//       sum = String(elem);
//     } else sum = sum + "+" + String(elem);
//     arr[i] = sum;
//     return sum;
//   }, 0);
//   arr.forEach((element, index) => {
//     element = element.split("+");
//     let sums = 0;
//     element.forEach((element) => {
//       sums += Number(element) || 0;
//     });
//     res[index] = sums;
//   });

//   return `[${arr}] = [${res}]`;
// }

// console.log(currentSums([2, 3, 5, 7, 11, 13, 17]));

// 2.	На входе имеем строку. Напишите функцию firstLettersFromString(), которая получает строку и возвращает новый массив из первых букв слов этой строки. При написании решения используйте метод map().

// Например:
// const str = "Каждый охотник желает знать, где сидит фазан.";
// const newArr = firstLettersFromString(str);
// console.log(newArr); // [К, о, ж, з, г, с, ф]

// function firstLettersFromString(str) {
//   let arr = str.split(" ");
//   let res = [];
//   arr.map((elem, index) => {
//     elem = elem.split("");
//     elem.map((elem, i, array) => {
//       res[index] = array[0];
//     });
//   });
//   return res;
// }
// console.log(
//   firstLettersFromString("Каждый охотник желает знать, где сидит фазан.")
// );

// 3.	На входе имеем массив чисел. Напишите функцию, которая получает новый массив, состоящий из всех целых положительных чисел этого массива. При написании решения используйте метод filter().

// Например:
// const startArray = [-1, 2, 3.5, -12, 4, 1.25, 16];
// const newArray = filteredArray(startArray);
// console.log(newArray);  // [2, 4, 16]

// function filteredArray(startArray) {
//   let newArray = startArray.filter((elem) =>
//     elem > 0 && elem % 1 == 0 ? true : false
//   );
//   return newArray;
// }
// console.log(filteredArray([-1, 2, 3.5, -12, 4, 1.25, 16]));

// const startArray = [-1, 2, 3.5, -12, 4, 1.25, 16];
// const newArray = startArray.filter((elem) =>
//   elem > 0 && elem % 1 == 0 ? true : false
// );

// console.log(newArray);

// 4.	На входе имеем массив значений. Напишите функцию moveZeros(), которая возвращает отсортированный входящий массив, где все нули (0) перемещены в конец этого массива, а остальные элементы остаются в том же порядке. При написании решения используйте метод sort().

// Например:
// const array1 = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
// const array2 = [0, 2, 0, 4, 0, 6];
// const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(moveZeros(array1)); //[ false, 1, NaN, 2, null, 3, 4, 5, 0, 0, 0 ]
// console.log(moveZeros(array2)); //[ 2, 4, 6, 0, 0, 0 ]
// console.log(moveZeros(array3)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

// const array1 = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
// const array2 = [0, 2, 0, 4, 0, 6];
// const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function moveZeros(array) {
//   array.sort((a, b) => {
//     if (a === 0 || b === 0) {
//       return b - a;
//     }
//   });

//   return array;
// }
// console.log(moveZeros(array1));

// 5.	На входе имеем массив чисел. Создать функцию changeArray(), которая будет менять местами половины массивов, т.е. если количество элементов четное, то вторая половина становится сначала массива, а первая на место второй; если количество элементов нечетное, тогда элемент массива, который является серединой остается на месте, а половины меняются местами.

// Например:
// changeArray([ 1, 2, 3, 4, 5 ]); //[ 4, 5, 3, 1, 2 ]
// changeArray([ 1, 2 ]); //[ 2, 1 ]
// changeArray([ 1, 2, 3, 4, 5, 6, 7, 8]);  //[ 5, 6, 7, 8, 1, 2, 3, 4 ]

// function changeArray(array) {
//   let arr1 = [];
//   let arr2 = [];
//   let between = [];
//   resArr = [];
//   let index = Math.floor(array.length / 2);
//   array.forEach((element, i, arr) => {
//     if (array.length % 2 == 0) {
//       if (i < index) {
//         arr1 = arr1.concat(element);
//       } else arr2 = arr2.concat(element);
//     } else {
//       if (i < index) {
//         arr1 = arr1.concat(element);
//       }
//       if (i > index) {
//         arr2 = arr2.concat(element);
//       }
//       if (i == index) {
//         between = element;
//       }
//     }
//   });
//   resArr = arr2.concat(between, arr1);
//   return resArr;
// }
// console.log(changeArray([1, 2, 3, 4, 5]));

// Задание:
// В папке Task2 создаем файл buttons-counter.html, в котором верстаем три кнопки, стилизуем их на свой вкус,
// создаем обработчик кликов (достаточно будет просто метода btn.onclick = function(){} для кнопок и считаем количество этих кликов по каждой кнопке,
//  выводя результат в саму кнопку, т.е. как текстовое значение кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании
//   и ничего не знать про саму кнопку (никаких this, textContent, innerText или innerHTML в самой функции и она должна только возвращать измененное значение счетчика),
//    т.е. должна быть только одна функция подсчета кликов, но использоваться для любого количества кнопок (подразумевается, что кнопок может быть как одна, так и пара сотен...).

// const button = document.querySelector(".button");
// const span = document.createElement("span");
// [...button.children].forEach((item) => {
//   item.addEventListener("click", function () {
//     item.innerText = +item.innerText + 1;
//   });
// });
// console.log(button);

// Задание:
// В папке Task2 создаем файл pow-and-calculate.html и реализуем функции, которые будут использовать понятие замыкание и каррирование и удовлетворять условиям:
// 1.	возводить в степень число, а вызываться будет как pow(x)(y);
// 2.	Не использовать метод Math.pow() или x**y;
// 3.	Желательно сделать с помощью рекурсии функцию pow(x)(y);
// 4.	суммировать числа и выводить результат, а вызываться как calculate(a)(“+”)(b); или calculate(a)(“-”)(b); (возможные операции - "+",  "-", "/", "*");
// *eval() использовать запрещено!

// function pow(x) {
//   return function (y) {
//     return x ** y;
//   };
// }
// console.log(pow(2)(3));

// function calculate(a) {
//   return function (oper) {
//     return function (b) {
//       switch (oper) {
//         case "-":
//           return a - b;

//         case "+":
//           return a + b;
//         case "*":
//           return a * b;
//         case "/":
//           return b == 0 ? "На 0 делить нельзя" : a / b;
//       }
//     };
//   };
// }
// console.log(calculate(3)("/")(0));

// let res = function test() {
//   let num = 1;

//   return function () {
//     console.log(num);
//     num++;
//   };
// };
// res()();
// res()();

// function each(arr, callback) {
//   let res = [];
//   arr.forEach((elem) => {
//     res.push(callback(elem));
//   });
//   return res;
// }

// let result = each([1, 2, 3, 4], cube);
// console.log(result);

// function cube(num) {
//   return num ** 3;
// }

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//  Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
// let date = new Date();
// function addZero(num) {
//   return num > 0 && num <= 9 ? "0" + num : num;
// }
// console.log(
//   `${date.getHours()}:${date.getMinutes()}:${addZero(
//     date.getSeconds()
//   )} ${addZero(date.getDate())}.${addZero(
//     date.getMonth() + 1
//   )}.${date.getFullYear()}`
// );
// let day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// Оформите этот способ решения проблемы в виде функции,
//  которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
// function showLastDay(year, month) {
//   let date = new Date(year, month, 0);
//   let lastDay = date.getDate();
//   console.log(lastDay);
// }

// showLastDay(2020, 02);

// let elem = document.querySelector("#elem");
// let paragraph = document.querySelector(".paragraph");
// let link = document.querySelector(".link");
// elem.addEventListener("click", function () {
//   link.textContent = `${link.textContent} (${link.href})`;
// });
// let img = document.createElement("img");
// img.src = "./football.jpg";
// img.width = 300 'px';
// console.log(img);

// const root = document.querySelector("#root");
// const year = 2022;
// const month = 12;
// const daysOfMonth = new Date(year, month, 0).getDate();
// console.log(daysOfMonth);
// const amountWeek = Math.ceil(daysOfMonth / 7);
// let firstDay = new Date(year, month, 1).getDay();
// firstDay = firstDay == 0 ? 6 : firstDay - 1;
// const calendar = new Array(amountWeek).fill([]).map((elem, index) => {
//   const arr = [];
//   for (let i = 1; i <= 7; i++) {
//     const dayValue = i + index * 7;
//     if (i > firstDay && index == 0) {
//       arr.push(dayValue - firstDay);
//     } else if (dayValue <= daysOfMonth && index > 0) {
//       arr.push(dayValue);
//     } else {
//       arr.push("");
//     }
//   }
//   return arr;
// });

// console.log(calendar);
// const tbody = document.createElement("tbody");
// calendar.forEach((elem) => {
//   const tr = document.createElement("tr");
//   const td = elem.map((elem) => {
//     const htmlTd = document.createElement("td");
//     htmlTd.innerText = elem;
//     return htmlTd;
//   });
//   tr.append(...td);
//   tbody.append(tr);
// });
// console.log(tbody);
// root.append(tbody);

const root = document.querySelector("#root");
const year = prompt("введите год рождения");
const monthName = prompt("введите название месяца").toLowerCase();

switch (monthName) {
  case "январь":
    month = 1;
    break;
  case "февраль":
    month = 2;
    break;
  case "март":
    month = 3;
    break;
  case "апрель":
    month = 4;
    break;
  case "май":
    month = 5;
    break;
  case "июнь":
    month = 6;
    break;
  case "июль":
    month = 7;
    break;
  case "август":
    month = 8;
    break;
  case "сентябрь":
    month = 9;
    break;
  case "октябрь":
    month = 10;
    break;
  case "ноябрь":
    month = 11;
    break;
  case "декабрь":
    month = 12;
    break;
}
const daysOfMonth = new Date(year, month, 0).getDate();

let firstDay = new Date(year, month - 1, 1).getDay();
firstDay = firstDay == 0 ? 6 : firstDay - 1;

const amountWeek = 5 + (firstDay >= 5 ? 1 : 0);
let dayValue = 1;
const calendar = new Array(amountWeek).fill([]).map((elem, index, array) => {
  const arr = [];
  // создать массивы с иднексом от 0 до 6
  // первый массив начинать с индекса firstday, до него пустые строки

  for (let i = 0; i <= 6; i++) {
    if (index == 0 && i < firstDay) {
      arr.push("");
    } else if (index == 0 && i >= firstDay) {
      arr.push(dayValue);
      dayValue++;

      // как сохранить dayValue, чтобы выходя из цикла сохранялось - выносим присвоение до цикла.
    } else if (index != 0) {
      arr.push(dayValue);
      dayValue++;
    }
    if (dayValue > daysOfMonth + 1) {
      arr.pop();
      arr.push("");
    }
  }

  return arr;
});
console.log(calendar);

const tbody = document.createElement("tbody");
calendar.forEach((elem) => {
  const tr = document.createElement("tr");
  const td = elem.map((elem) => {
    const htmlTd = document.createElement("td");
    htmlTd.innerText = elem;
    return htmlTd;
  });
  tr.append(...td);
  tbody.append(tr);
});
console.log(tbody);
root.append(tbody);

const td = document.getElementsByTagName("td");
const length = td.length;
console.log(length);
for (let i = 0; i < length; i++) {
  td[i].classList.add("green");
}
let trWeekday = document.createElement("tr");

tbody.prepend(trWeekday);

for (let i = 0; i < 7; i++) {
  const tdWeekday = document.createElement("td");
  trWeekday.append(tdWeekday);
  tdWeekday.classList.add("green");
  switch (i) {
    case 0:
      tdWeekday.innerText = "пн";
      break;
    case 1:
      tdWeekday.innerText = "вт";
      break;
    case 2:
      tdWeekday.innerText = "ср";
      break;
    case 3:
      tdWeekday.innerText = "чт";
      break;
    case 4:
      tdWeekday.innerText = "пт";
      break;
    case 5:
      tdWeekday.innerText = "сб";
      break;
    case 6:
      tdWeekday.innerText = "вс";
      break;
  }
}
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerText = `${year} год `;
p2.innerText = `${monthName} месяц`;
root.prepend(p2);
root.prepend(p1);
