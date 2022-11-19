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
