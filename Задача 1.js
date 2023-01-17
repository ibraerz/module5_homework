//Задача 1

const result = +prompt("Введите число", 2);
if (typeof result !== Number && isNaN(result)) {
  alert("Упс, кажется, вы ошиблись");
} else if (result % 2 === 0) {
  alert("Число четное");
} else {
  alert("число нечетное");
}
