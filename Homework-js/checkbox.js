const root = document.querySelector("#root");
const inputYes = document.createElement("input");
const label = document.createElement("label");
inputYes.type = "checkbox";
label.innerText = "Да";

root.append(label, inputYes);
