"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let message;
let balance;
let totalPrice;
let quantityDroids = prompt("How many droids do you want to buy?");

if (quantityDroids === null) {
  message = "Отменено пользователем!";
  alert(message);
} else {
  totalPrice = quantityDroids * pricePerDroid;
  balance = credits - totalPrice;

  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
    alert(message);
  } else {
    alert(
      `Вы купили ${+quantityDroids} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}
