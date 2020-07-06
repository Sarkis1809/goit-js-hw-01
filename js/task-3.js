"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const passwordRequest = prompt("Please enter the password");

if (passwordRequest === null) {
  message = "Отменено пользователем!";
  alert(message);
} else {
  if (passwordRequest === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
    alert(message);
  } else {
    message = "Доступ запрещен, неверный пароль!";
    alert(message);
  }
}
