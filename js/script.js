import { setName } from "./app/btnNewName.js";
import { saveDogName } from "./app/btnSaveName.js";
import { newName, saveName } from "./utils/elements.js";

// Вішаємо подію кліку на кнопку
newName.onclick = setName;

// Вішаємо подію кліку на кнопку збереження клички
saveName.onclick = saveDogName;
