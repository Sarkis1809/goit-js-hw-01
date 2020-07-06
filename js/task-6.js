"use strict";

let input = prompt("Please, enter some number");
let total = 0;

for (let i = 0; (i += 1); ) {
  total += Number(input);
  input = prompt("Please, enter some number");

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
}
