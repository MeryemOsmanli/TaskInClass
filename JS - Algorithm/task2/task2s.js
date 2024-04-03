// 2.
var arr = [
  { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
  { urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
  { urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
  { urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
  {
    urunAdi: "Tavuk Göğsü",
    fiyat: 15.0,
    stok: 30,
    kategori: "Et ve Et Ürünleri",
  },
  { urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
  {
    urunAdi: "Ton Balığı",
    fiyat: 10.0,
    stok: 20,
    kategori: "Konserve ve Hazır Yiyecekler",
  },
  { urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
  { urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
  { urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" },
];

// Verilmis arrayin  daxilinde qiymeti  50 den cox olanlari array kimi qaytaran kod yaz  (array  methodlarina nezer yetir)

let greaterThan50 = arr.filter((num) => num.stok > 50);
console.log(greaterThan50);
console.log("______________________________________");

// 3. yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
let findCategory = arr.filter(
  (myArray) => myArray.kategori === "Meyve ve Sebzeler"
);
console.log(findCategory);
console.log("______________________________________");

// 4.   yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari   ve stokda  2 den cox olanlari   ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
let findCategoryAndStock = arr.filter(
  (myArray) => myArray.kategori === "Meyve ve Sebzeler" && myArray.stok > 2
);
console.log(findCategoryAndStock);
console.log("______________________________________");

// 5.  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz    (array  methodlarina nezer yetir)
let findMilk = arr.some((myArr) => myArr.urunAdi === "Süt");
console.log(findMilk);
console.log("______________________________________");

// 6.  yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (array  methodlarina nezer yetir)

let indexTon = arr.findIndex((myArr) => myArr.urunAdi === "Ton Balığı");
console.log(indexTon);
