//Задача 8

let cars = new Map([
  ["Mercedes", "black"],
  ["Reno", "red"],
  ["Tesla", "white"],
]);
for (let keyProp of cars) {
  console.log(`Ключ - ${keyProp[0]}, Значение - ${keyProp[1]}`);
}
