import { dogList, randomName } from "../utils/elements.js";

// Масив для збереження кличок
let arrDogNames = JSON.parse(localStorage.getItem("SavedName")) ?? [];

// Вивід збержених кличок до html
function viewNames() {
  // Очищаємо список від старих записів
  let dogListNames = "";

  // Виводимо клички в списо
  arrDogNames.forEach((name) => {
    // Виводимо кличку в список
    dogListNames += `<li>${name}</li>`;
  });

  // Виводимо клички в html
  dogList.innerHTML = dogListNames;
}

// Зберігаємо клички користувача
export function saveDogName() {
  // Отримуємо кличку з елементу randomName
  const name = randomName.innerHTML;

  // Добавляємо кличку до масиву збережених кличок
  if (!arrDogNames.includes(name)) {
    arrDogNames.push(name);
  }

  // Вивід кличок
  viewNames();

  // Зберігаємо масив збережених кличок
  localStorage.setItem("SavedName", JSON.stringify(arrDogNames));
}

// При заватаження сторікни виликаємо вивід кличок
viewNames();
