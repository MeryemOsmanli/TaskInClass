// Array.prototype.maryam = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// const arr = ["salam", "sagol"];
// console.log(maryam(arr));
// Array.prototype.maryam = "maryyy";
// const arr = [1, 2, 3, 4];
// Array.prototype.MaryForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i]);
//     console.log("slsl");
//   }
// };
// arr.MaryForEach();
// console.log();
// Milk :
//  - id
//  - Name
//  - Price
//  - FatPercent
//  - Madeİn

// Milk class-ından istifadə edib 3 milk yaradın.Və onları bir array-ə yığın.

// Qeyd: Funksiyaları yazarkən, array iteration methodlarından istifadə edin.
function Milk(id, name, price, fatPercent, madeİn) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.fatPercent = fatPercent;
  this.madeİn = madeİn;
}
const inekSudu = new Milk(1, "inek", 3, 10, "Flippin");
const keciSudu = new Milk(2, "keci", 2, 12, "Indoneziya");
const qoyunSudu = new Milk(3, "qoyun", 4, 13, "Almaniya");

// console.log(inekSudu);
// console.log(keciSudu);
// console.log(qoyunSudu);

// TASK 1.1 : Məhsulların hər birini consoleda göstərin.
let arr = [inekSudu, keciSudu, qoyunSudu];
arr.forEach((x) => console.log(x));
console.log("______________________________________");

// TASK 1.2 : Məhsullardan id-si 1-ə bərabər olan məhsulu qaytaran funksiya yazın.
console.log(arr.find((x) => x.id === 1));
console.log("______________________________________");

// TASK 1.3 : FatPercent-in ədədi ortasını çıxarın. Bunu FatAverage adlı funksiya ilə edin. Funksiya həmin arrayi parametr kimi qəbul edəcək, ədədi ortanı qaytaracaq.
function FatAverage(arr) {
  let total = arr.reduce((x, y) => x + y.fatPercent, 0);
  return total / arr.length;
}
console.log(FatAverage(arr));
console.log("______________________________________");

// Task 1.4 : yağlılıq faizi 3-dən yuxarı olan milk-ləri arraydə göstərin. Funksiya yazın.
let yagliliqfaizi = arr.filter((arr) => arr.fatPercent > 3);
console.log(yagliliqfaizi);
console.log("______________________________________");
// Task 1.5 : Funksiya yazın array və bir number qəbul etsin. Arraydəki elementlərin price-nı bu number qədər artırsın.
function mapFunct(arr, num) {
  const mapnumber = arr.map((x) => x.price + num);
  return mapnumber;
}
console.log(mapFunct(arr, 10));
console.log("______________________________________");
// Task 1.6 : Ümumi price-ı qaytaran funksiya yazın.
function commonprice(arr) {
  let total = arr.reduce((x, y) => x + y.fatPercent, 0);
  return total;
}
console.log(commonprice(arr));
console.log("______________________________________");

// Task 1.8 : ən baha milkin adını qaytaran funksiya yazın. Arrayi parametr kimi qəbul etsin
let sorted = arr.sort((x, y) => x.price - y.price);
console.log(sorted[sorted.length - 1].name);
console.log("______________________________________");

// Task 1.9 : ən baha və ən ucuz arasındakı fərqi qaytaran funksiya yazın. Funksiya yazın.
let sorted2 = arr.sort((x, y) => x.price - y.price);
console.log(sorted2[sorted2.length - 1].price - sorted2[0].price);
console.log("______________________________________");

// Task 1.10: Məhsullar içərisində Azərbaycan istehsalı olan məhsul varmı?
console.log(arr.some((x) => x.madeİn === "azerbaycan"));
