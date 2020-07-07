"use strict";

let input = prompt("Please, enter some number");
let total = 0;

do {
  total += Number(input);
  input = prompt("Please, enter some number");
} while (input != null);
alert(`Общая сумма чисел равна ${total}`);
