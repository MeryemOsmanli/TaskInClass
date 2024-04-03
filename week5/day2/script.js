// const friends = [];
// function addFriend(name, age) {
//   const obj = {
//     name,
//     age,
//   };
//   friends.push(obj);
// }
// const name = "Meryem";
// const age = 19;
// for (let i = 0; i < 3; i++) {
//   addFriend(name, age);
// }
// console.log(friends);

// const details = {
//   name: "Meryem",
//   surname: "Osmanova",
//   age: 19,
// };
// const result1 = Object.keys(details);
// const result2 = Object.values(details);
// const result3 = Object.entries(details);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// function myObj() {
//   return this.firstName + " " + this.lastName;
// }
// obj = {
//   firstName: "Mery",
//   lastName: "osman",
// };
// console.log();
// const person = {
//   fullName: function (frname, frsurname) {
//     return (
//       this.firstName + " " + this.lastName + " " + frname + " " + frsurname
//     );
//   },
// };

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// // This will return "Mary Doe":
// const result2 = person.fullName.call(person1, "rufet", "nesib");
// const result1 = person.fullName.apply(person1, ["rufet", "nesib"]);
// console.log(result1);
// console.log(result2);

// const person3 = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person3.fullName.bind(member);
// console.log(fullName());

// Id,Brand,Model,Screen size,Battery level,Price,Discount Percentage
// kimi property-lərə sahib obyekt yaradın.
// CalculateProfit adlı methodu olsun ki, bu da məhsuldən gələn gəliri hesablasın .
// DisplayBatteryLevel  adlı method olsun ki, bu da bateriyanın nə qədər olduğunu göstərsin.
// DisplayDetails adlı method olsun ki, bu da məhsulun screensize,model,brand, dəyərlərini göstərsin.
// CalculateDiscount adlı method yaradın ki bu da endirimli qiyməti hesablasın.

// Bu tipdə bir neçə obyekt yaradın və arraya yığın.

const myObj = {
  count: 2,
  id: 2024,
  brand: "Iphone",
  model: "Iphone 15+",
  screenSize: "30 x 40",
  batteryLevel: 48,
  price: 3300,
  discountPercentage: 10,
  calculateProfit: function () {
    // return `Elde edilen gelir: ${
    //   (this.price - (this.price * this.discountPercentage) / 100) * this.count
    // }`;
    return (
      (this.price - (this.price * this.discountPercentage) / 100) * this.count
    );
  },
  displayBatteryLevel: function () {
    return `Telefon bateriyasi: ${this.batteryLevel}`;
  },
  displayDetails: function () {
    return `Telefonun screen size ${this.screenSize}-dir, modeli ${this.model}-dir , brandi ${this.brand}-dir`;
  },
  calculateDiscount: function () {
    return `Endirimli qiymet : ${
      this.price - (this.price * this.discountPercentage) / 100
    }`;
  },
};
const myObj2 = {
  count: 3,
  id: 2023,
  brand: "Iphone",
  model: "Iphone 15 pro ",
  screenSize: "40 x 60",
  batteryLevel: 56,
  price: 4300,
  discountPercentage: 8,
  calculateProfit: function () {
    // return `Elde edilen gelir: ${
    //   (this.price - (this.price * this.discountPercentage) / 100) * this.count
    // }`;
    return (
      (this.price - (this.price * this.discountPercentage) / 100) * this.count
    );
  },
  displayBatteryLevel: function () {
    return `Telefon bateriyasi: ${this.batteryLevel}`;
  },
  displayDetails: function () {
    return `Telefonun screen size ${this.screenSize}-dir, modeli ${this.model}-dir , brandi ${this.brand}-dir`;
  },
  calculateDiscount: function () {
    return `Endirimli qiymet : ${
      this.price - (this.price * this.discountPercentage) / 100
    }`;
  },
};

let myArr = [myObj, myObj2];
// 1. FilterbyPrice - parametr olaraq həmin arrayi və price deyerleri qebul edir. Gonderilmish array-də price-ı göndərilmiş price-dan yuxarı olan product-ların name-lərini qaytarın.

let nextprice = 3500;
let FilterbyPrice = myArr.filter((obj) => obj.price > nextprice);
for (let i = 0; i < FilterbyPrice.length; i++) {
  console.log(FilterbyPrice[i].model);
}
console.log(FilterbyPrice);
// 2. FilterbyName - parametr olaraq həmin arrayi və name deyerleri qebul edir və gonderilen name-də məhsulun olub-olmadığını qaytarır.
let nextname = "Iphone";
for (let i = 0; i < FilterbyPrice.length; i++) {
  console.log(FilterbyPrice[i].model.includes(nextname));
}
// 3. GetTotalProfit - parametr olaraq həmin array qebul edir ve hemin array-deki product-larin umumi profitini (gelirini) qaytarir.
let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  sum += myArr[i].calculateProfit();
}
console.log(sum);
// 4.AddPrice - parametr olaraq həmin array qebul edir və məhsulun price-nı 10 artrır.
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i].price + 10);
}

console.log(myArr);
console.log(myObj.calculateDiscount());
console.log(myObj.displayDetails());
console.log(myObj.displayBatteryLevel());
console.log(myObj.calculateProfit());
