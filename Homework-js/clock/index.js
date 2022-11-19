class Clock {
  constructor() {
    this.container = document.createElement("section");
    this.container.classList.add("container");
    this.hours = this._creatHours();
    this.arrowHr = document.createElement("div");
    this.arrowHr.classList.add("hours");
    this.arrowMn = document.createElement("div");
    this.arrowMn.classList.add("minutes");
    this.arrowSec = document.createElement("div");
    this.arrowSec.classList.add("seconds");
    this.point = document.createElement("div");
    this.point.classList.add("point");
  }
  _creatHours() {
    return new Array(12).fill(null).map((elem, index) => {
      const div = document.createElement("div");
      div.innerText = index + 1;
      div.classList.add("container__number");

      const radius = 40;
      const arc = 2 * Math.PI * (1 / 12);
      let angle = index * arc;
      let x = radius * Math.cos(angle + 5.25);
      let y = radius * Math.sin(angle + 5.25);
      div.style.left = 50 + x + "%";
      div.style.top = 50 + y + "%";

      return div;
    });
  }
  getTemplate() {
    const hr = document.createElement("div");
    const mn = document.createElement("div");
    const sec = document.createElement("div");
    hr.classList.add("hr");
    mn.classList.add("mn");
    sec.classList.add("sec");
    this.arrowHr.append(hr);
    this.arrowMn.append(mn);
    this.arrowSec.append(sec);
    this.container.append(
      ...this.hours,
      this.arrowHr,
      this.arrowMn,
      this.arrowSec,
      this.point
    );
    return this.container;
  }
  on() {
    this.intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours() * 30;
      const minutes = date.getMinutes() * 6;
      const seconds = date.getSeconds() * 6;

      this.arrowHr.style.transform = `rotateZ(${hours + minutes / 12}deg)`;

      this.arrowMn.style.transform = `rotateZ(${minutes}deg)`;
      this.arrowSec.style.transform = `rotateZ(${seconds}deg)`;
      console.clear();
      console.log(date.getHours(), date.getMinutes(), date.getSeconds());
    }, 1000);
  }
  off() {
    clearInterval(this.intervalId);
  }
}
const clock = new Clock();
const root = document.querySelector("#root");
root.append(clock.getTemplate());
const button = document.createElement("section");

const buttonOn = document.createElement("button");
const buttonOff = document.createElement("button");

buttonOn.innerText = "Вкл";
buttonOff.innerText = "Выкл";
button.classList.add("button");
buttonOn.classList.add("buttonOn");
buttonOff.classList.add("buttonOff");
buttonOn.addEventListener("click", () => {
  clock.on();
});
buttonOff.addEventListener("click", () => {
  clock.off();
});
button.append(buttonOn, buttonOff);
root.append(button);
