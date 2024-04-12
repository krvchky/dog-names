import { dogList, randomName } from "../utils/elements.js";

export function saveDogName() {
  // Отримуємо кличку з елементу randomName
  const name = randomName.innerHTML;

  // Добавити до списку нову кличку
  dogList.innerHTML += `<li>${name}</li>`;
}
