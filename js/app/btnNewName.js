import { dogNames } from "../utils/dogNames.js";
import { randomName } from "../utils/elements.js";

// Отримуємо випадкове число
function getRandomKey() {
  return Math.floor(Math.random() * dogNames.length);
}

// У функції кліку потрібно вивести у js-random-name випадкову кличку
export function setName() {
  // отримуємо випадковий ключ
  const randomNum = getRandomKey();

  // виводимо випадкову кличку
  randomName.innerHTML = dogNames[randomNum];
}
