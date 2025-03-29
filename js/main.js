//1.Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsius = 50;
const fahrenheit = 150;
celsius = (celsius * 9) / 5 + 32;
console.log(celsius);

//2.Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth);
const minutesInMonth = hoursInMonth * 60;
console.log(minutesInMonth);

//3.Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let health = 100;
let energy = 200;
health = health - 50;
console.log(health);
energy = energy - 10;
console.log(energy);

//4.Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.

const totalPrice = 547;
const discount = 10 / 100;
const discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

//6.Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = "45.67";
const result = Number.parseFloat(floatString);
console.log(result);

//7.Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.

const intString = "123";
const sum = Number.parseInt(intString);
console.log(sum);

//Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.

const integer = 42;
const stringNumber = "256";
const convertedInt = Number.parseInt(stringNumber);
console.log(convertedInt);
const onvertedString = integer.toString();
console.log(onvertedString);
