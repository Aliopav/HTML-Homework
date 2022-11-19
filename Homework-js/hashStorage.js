// Задание:
// В папке Task2 создаем файл coctails.html и реализуем следующее:
// 1.	Разработать класс HashStorage (в файле HashStorage.js) для хранения произвольных пар ключ-значение. Ключом может быть любая строка; значение может иметь любой тип, в том числе сложный (объект, массив или функция).
// Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные свойства и методы):
// •	storage — хеш, который будет хранить в себе ключи и их значения;
// •	addValue(key,value) — сохраняет указанное значение под указанным ключом в storage;
// •	getValue(key) — возвращает значение по указанному ключу либо undefined;
// •	deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище storage;
// •	getKeys() — возвращает массив, состоящий из одних ключей

class HashStorage {
  constructor() {
    this.storage = {
      Маргарита: {
        алкогольный: "да",
        "необходимые ингридиенты": [
          "Водка Finlandia 50мл",
          "Кофейный ликер 25мл",
          "Лед в кубиках 120 г",
        ],
        "рецепт приготовления":
          "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.",
      },
    };
  }
  addValue(key, value) {
    this.storage[key] = value;
  }
  getValue(key) {
    return this.storage[key];
  }
  deleteValue(key) {
    delete this.storage[key];
  }
  getKeys() {
    return Object.keys(this.storage);
  }
}

const coctailStorage = new HashStorage();

// 2.	Создать объект-потомок (экземпляр) coctailsStorage класса HashStorage для хранения рецептов коктейлей. Ключом является название напитка, а его значением — информация о напитке
// (алкогольный напиток или нет, массив с ингредиентами, строка с рецептом приготовления и т.д. (по желанию)). Структура не должна представлять из себя единую строку.
// 3.	На странице сверстать кнопки:
// •	«ввод рецепта» — последовательно спрашивает название напитка, алкогольный он или нет, какие ингредиенты необходимы и в каких пропорциях, рецепт его приготовления (и т.д.);
// сохраняет всю эту информацию о коктейле в хранилище (coctailsStorage).
// •	«рецепт напитка» — спрашивает название напитка и выдаёт на страницу сверстанную версию (предпочтительно) или в консоль информацию о нём по примеру, приведённому ниже,
//  либо сообщение об отсутствии такого напитка в хранилище.
// •	«удаление рецепта» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения пользователю.
// •	 «перечень всех коктейлей» — выводит список названий коктейлей из хранилища.

// *Вывод коктейля должен быть следующим:
// •	Название коктейля и св-во алкогольности должно быть в теге <h2>
// •	Ингредиенты должны быть или в таблице, или в маркированном списке
// •	Рецепт – просто в абзаце.
// ! Надо, чтобы в хранилище coctailsStorage уже было 3-5 коктейлей, добавление которых реализовано через метод addValue.

class ViewCoctailStorage {
  constructor(storage) {
    this.steps = [
      "введите название коктейля",
      "Напиток алкогольный?",
      "введите ингридиенты",
      "введите рецепт приготовления",
    ];
    this.buttons = [
      { text: "ввод рецепта", event: this.enterList },
      { text: "получить рецепт", event: this.creatRecept },
      { text: "удалить рецепт", event: this.removeList },
      { text: "список коктейлей", event: this.creatList },
    ].map((elem) => {
      return this.creatButton(elem.text, elem.event);
    });
    this.storage = storage;
    this.container = document.createElement("div");
    this.container.classList.add("text");
  }
  creatButton(text, event) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = text;
    button.onclick = event.bind(this);

    return button;
  }

  creatList() {
    this.container.innerHTML = "";
    const ul = document.createElement("ul");
    this.storage.getKeys().forEach((elem) => {
      const li = document.createElement("li");
      li.innerText = elem;
      ul.append(li);
    });
    this.container.append(ul);
  }
  creatRecept() {
    this.container.innerHTML = "";
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerText = "далее";
    this.container.append(input, button);

    button.addEventListener("click", () => {
      this.container.innerHTML = "";
      console.log(input.value);
      const recept = this.storage.getValue(input.value);
      console.log(recept);
      const header = document.createElement("header");
      const section1 = document.createElement("section");
      const section1Header = document.createElement("header");
      const ul = document.createElement("ul");

      recept["необходимые ингридиенты"].forEach((elem) => {
        const li = document.createElement("li");
        li.innerText = elem;
        ul.append(li);
      });

      const section2 = document.createElement("section");
      const section2Header = document.createElement("header");
      const textRecept = document.createElement("p");

      header.innerText = `Коктейль "${input.value}" (алкогольный: ${recept["алкогольный"]}) `;
      section1Header.innerText = "Необходимые ингридиенты:";
      section2Header.innerText = "Рецепт приготовления:";
      textRecept.innerText = recept["рецепт приготовления"];

      this.container.append(header, section1);
      section1.append(section1Header, ul);
      this.container.append(section2);
      section2.append(section2Header, textRecept);
    });
  }
  enterList() {
    this.creatStep(this.steps[0], 0);

    // const value = {};
    // value["алкогольный"] = prompt("Напиток алкогольный?");
    // value["необходимые ингридиенты"] = [prompt("введите ингридиенты")];
    // value["рецепт приготовления"] = prompt("введите рецепт приготовления");
    // const recept = this.storage.addValue(key, value);
    // console.log(recept);
  }

  creatStep(text, i) {
    this.container.innerHTML = "";
    let input = document.createElement("input");
    const h1 = document.createElement("h1");
    h1.innerText = text;
    const button = document.createElement("button");
    let value;

    let key;

    if (i == 1) {
      const input1 = document.createElement("input");
      const input2 = document.createElement("input");
      const label1 = document.createElement("label");
      const label2 = document.createElement("label");
      input1.type = "checkbox";
      input2.type = "checkbox";
      input1.classList.add("yes");
      input2.classList.add("no");
      label1.innerText = "Да";
      label2.innerText = "Нет";
      input = document.createElement("div");
      input.append(label1, input1, label2, input2);
    }
    if (i == 2) {
      const inputEnter = document.createElement("input");
      const buttonAdd = document.createElement("button");
      const ul = document.createElement("ul");
      inputEnter.type = "text";
      buttonAdd.innerText = "+";
      buttonAdd.addEventListener("click", () => {
        const li = document.createElement("li");
        li.innerText = inputEnter.value;
        if (li.innerText != "") {
          ul.append(li);
        }

        inputEnter.value = "";
      });
      input = document.createElement("div");
      input.append(inputEnter, buttonAdd, ul);
    }
    if (i == 3) {
      const inputEnter = document.createElement("input");
      const buttonAdd = document.createElement("button");
      const ol = document.createElement("ol");
      inputEnter.type = "text";
      buttonAdd.innerText = "+";
      buttonAdd.addEventListener("click", () => {
        const li = document.createElement("li");
        li.innerText = inputEnter.value;
        if (li.innerText != "") {
          ol.append(li);
        }

        inputEnter.value = "";
      });
      input = document.createElement("div");
      input.append(inputEnter, buttonAdd, ol);
    }
    button.innerText = "далее";
    button.addEventListener("click", () => {
      if (i < this.steps.length - 1) {
        this.creatStep(this.steps[i + 1], i + 1);
        if (i == 0) {
          key = input.value;
        }

        let recept = this.storage.addValue(key, value);
      }

      if (i == this.steps.length - 1) {
        this.container.innerHTML = "";
      }
    });
    this.container.append(h1, input, button);
  }
  removeList() {
    const key = prompt("введите название коктейля");
    this.storage.deleteValue(key);
  }

  render(parent) {
    parent.append(...this.buttons);
    parent.append(this.container);
  }
}

const viewCoctails = new ViewCoctailStorage(coctailStorage);
viewCoctails.render(document.getElementById("root"));
