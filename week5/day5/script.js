// var arr = [
//   { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
//   { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
//   { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
//   {
//     urunAdi: "Tavuk Göğsü",
//     fiyat: 15.0,
//     stok: 30,
//     kategori: "Et ve Et Ürünleri",
//   },
//   { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
//   {
//     urunAdi: "Ton Balığı",
//     fiyat: 10.0,
//     stok: 20,
//     kategori: "Konserve ve Hazır Yiyecekler",
//   },
//   { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
//   { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
//   { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
// ];

// arr.sort((a, b) => (a.stok < b.stok ? 1 : b.stok < a.stok ? -1 : 0));
// console.table(arr);
// ________________________________________________________________________

// const myArr = [
//   {
//     id: 5,
//     supplierId: 2,
//     categoryId: 2,
//     quantityPerUnit: "36 boxes",
//     unitPrice: 21.35,
//     unitsInStock: 0,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Gumbo Mix",
//   },
//   {
//     id: 6,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 8 oz jars",
//     unitPrice: 25,
//     unitsInStock: 120,
//     unitsOnOrder: 0,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Grandma's Boysenberry Spread",
//   },
//   {
//     id: 7,
//     supplierId: 3,
//     categoryId: 7,
//     quantityPerUnit: "12 - 1 lb pkgs.",
//     unitPrice: 30,
//     unitsInStock: 15,
//     unitsOnOrder: 0,
//     reorderLevel: 10,
//     discontinued: false,
//     name: "Uncle Bob's Organic Dried Pears",
//   },
// ];
// const result = myArr.reduce(
//   (past, now) => now.reorderLevel * now.unitPrice + past,
//   0
// );
// console.log(result);
// ________________________________________________________________________
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Salam ${this.name}`);
//   }
// }

// class Animals extends Person {
//   constructor(name, age, animal) {
//     super(name, age);
//     this.animal = animal;
//   }
// }
// console.log(new Person("Mery", 19));
// console.log(new Animals("mery", 19, "mestan"));
// ________________________________________________________________________
// Car classı yaradırsınız.
// Field olaraq brand,model,color,year,speed,fuelCapacity,km,(maşının indiyə qədər getdiyi məsafə),fuelFor1Km,currentFuel fieldləriniz olsun.
// ShowInfo()funksiyanınız olsun maşının bütün məlumatlarını geri qaytarsın.
// AddFuel() methodunuz olsun parametr olaraq yanacaq qəbul etsin (20) yanacaq tutumunu aşırsa "yanacaq çənində yetəri qədər yer yoxdur." deyilsin. Əks halda "yanacaq uğurla əlavə olundu" yazılsın.
// Drive() funksiyanız olsun.Parametr olaraq neçə km yol gediləcəyini qəbul etsin əgər yanacaq çənində yetəri qədər yanacaq yoxdursa "yetəri qədər yanacaq yoxdur" yazılsın.Əks halda "ünvana çatdıq yazılsın" və yanacaq çənindən həmin yanacaq çıxılsın və maşının km-dən həmin qədər artsın və maşının məlumatları ekranda yenidən çap etsin.

// class Car {
//   constructor(
//     brand,
//     model,
//     color,
//     year,
//     speed,
//     fuelCapacity,
//     km,
//     fuelFor1Km,
//     currentFuel
//   ) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.speed = speed;
//     this.fuelCapacity = fuelCapacity;
//     this.km = km;
//     this.fuelFor1Km = fuelFor1Km;
//     this.currentFuel = currentFuel;
//   }
//   ShowInfo() {
//     return this;
//   }
//   AddFuel(yanacaq) {
//     if (yanacaq > this.currentFuel) {
//       console.log("yanacaq çənində yetəri qədər yer yoxdur.");
//     } else {
//       console.log("yanacaq uğurla əlavə olundu");
//     }
//   }
//   Drive(km) {
//     let mery = this.fuelFor1Km * km;
//     if (mery > this.currentFuel) {
//       console.log("yetəri qədər yanacaq yoxdur");
//     } else {
//       console.log("ünvana çatdıq");
//       let endfull = this.currentFuel - mery;
//       this.km = this.km + km;
//       console.log(endfull);
//       console.log(this);
//     }
//   }
// }
// const car1 = new Car("Porshe", "GT3", "green", 2000, 250, 60, 10, 2, 19);
// const car2 = new Car("BMW", "M5", "black", 2011, 270, 50, 20, 3, 63);
// const car3 = new Car(
//   "Range Rover",
//   "Land Rover",
//   "white",
//   1999,
//   210,
//   70,
//   "km3",
//   1,
//   22
// );
// console.log(car1.ShowInfo());
// car1.AddFuel(20);
// car2.AddFuel(20);
// car1.Drive();
// car2.Drive(20);
// ________________________________________________________________________
class Human {
  constructor(name, surname, age, gender, nationality) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
  getFullName() {}
}
class User extends Human {
  constructor(username, email, isAdmin, password, bio, isLogged = false) {
    super();
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isLogged = isLogged;
    this.password = password;
    this.bio = bio;
    if (!(this.password.length > 4)) {
      alert("reqem yeterli degil");
    }
    if (!(this.bio.length < 31)) {
      alert("serheddi asirsan");
    }

    // console.log(this);
  }
  changePassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      alert("new password and current password is the same");
      console.log(this);
      return (this.password = newPassword);
    } else {
      alert("sjksxkj");
      return obj1;
    }
  }
  changeEmail() {}
}
const obj1 = new User("Mery", "meryosman@email", true, "11223", "jjjjjj", true);
// console.log(obj1.isLogged);
// console.log(obj1);
console.log(obj1.changePassword("11223", "445566"));
