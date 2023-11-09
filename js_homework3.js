// Задані значення
var value = 10; // Значення
var unit = "км"; // Одиниця виміру

// Змінна для збереження результата
var result;

// Вивід вхідних даних
console.log(value + " " + unit + " це ");

//switch для конвертації
switch (unit) {
  case "км":
    result = value * 1000;
    console.log(result + " м.");
    break;
  case "год":
    result = value * 60;
    console.log(result + " хв.");
    break;
  case "кг":
    result = value * 1000;
    console.log(result + " г.");
    break;
  default:
    console.log("Невідома одиниця виміру");
    break;
}