//________Создаю объект Car
function Car(model, year, kmage) {
    this.model = model;
    this.year = year;
    this.kmage = kmage;
}
//________Создаю 2 экземпляра объекта Car
var bmw = new Car("BMW M5", 2020, 45000);
var audi = new Car("Audi Q7", 2021, 30000);

//________Добавляю экземпляры в массив
var carArray = new Array(bmw, audi);

var sortYear = function (a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year == b.year) return 0;
}

var sortKmage = function (a, b) {
    if (a.kmage > b.kmage) return 1;
    if (a.kmage < b.kmage) return -1;
    if (a.kmage == b.kmage) return 0;
}

console.log("Сортировка по году выпуска")
carArray.sort(sortYear);  //сортировка по году выпуска
console.log(carArray)
console.log("Сортировка по пробегу")
carArray.sort(sortKmage);  //сортировка по пробегу
console.log(carArray)