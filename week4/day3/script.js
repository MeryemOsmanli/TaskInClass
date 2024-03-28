// task1
// let saniye = prompt("Reqem daxil edin");
// let deqiqe = Math.floor(saniye / 60);
// let qaliq = saniye % 60;
// console.log(`${deqiqe} deqiqe ${qaliq} saniye`);

// task2
// let temperatur = prompt("Temperaturu daxil edin");
// let farenheyt = ((temperatur - 32) * 5) / 9;
// console.log(`${farenheyt}`);

// task3
// let riy = Number(prompt("riyaziyyat bali daxil edin"));
// let az = Number(prompt("azerbaycan  bali daxil edin "));
// let eng = Number(prompt("ingilis   bali daxil edin"));
// let kimya = Number(prompt("kimya  bali daxil edin"));
// let fizika = Number(prompt("fizika  bali daxil edin"));
// let ortalama = (riy + az + eng + kimya + fizika) / 5;
// console.log(ortalama);

// task4
// let dogumili = Number(prompt("dogum ilinizi daxil edin"));
// let yas = 2024 - dogumili;
// console.log(yas);

// task5
// let num1 = Number(prompt("Ilk reqemi daxil edin"));
// let num2 = Number(prompt("Ikinci reqemi daxil edin"));
// let netice = (num1 / num2) * 100;
// console.log(`${num1} ${num2}-un ${netice}%-dir`);

// task6
// let a = Number(prompt("Birinci kateti daxil edin"));
// let b = Number(prompt("Ikinci kateti daxil edin"));
// let sahe = (a * b) / 2;
// console.log(sahe);

// task7
// let miqdar = Number(prompt("Miqdari daxil edin"));
// let faiz = Number(prompt("Faizi daxil edin"));
// let muddet = Number(prompt("Muddet daxil edin"));
// let netice = (miqdar + (miqdar * faiz) / 100) / muddet;
// console.log(netice);

// task8
// let ad = prompt("Adinizi daxil edin");
// let soyad = prompt("Soyadinizi daxil edin");
// let fullname = ` ${ad} ${soyad}  xos gelmisiz `;
// console.log(fullname);

// task9
// let a = Number(prompt("Kvadratin terefini daxil edin"));
// let perimetr = a * 4;
// let sahe = a ** 2 / 2;
// console.log(`Kvadratin perimetri ${perimetr}-dir , sahesi ise ${sahe}-dir`);

// task10
// let num1 = Number(prompt("Birinci reqem"));
// let num2 = Number(prompt("Ikinci reqem"));
// let cemkub = (num1 + num2) ** 3;
// let kubcem = num1 ** 3 + num2 ** 3;
// console.log(kubcem);
// console.log(cemkub);

// ikinci taskk
// task1
// let i = Number(prompt("yasinizi daxil edin"));
// if (i >= 0 && i < 125) {
//   if (i >= 65) {
//     console.log("Siz pensiyanersiz");
//   } else {
//     console.log("Siz pensiya ucun uy]un deyilsiz");
//   }
// } else {
//   console.log("duzgun araliqda yas qeyd edin");
// }

// task2
// let a = Number(prompt("Birinci terefi daxil edin"));
// let b = Number(prompt("Ikinci terefi daxil edin"));
// let c = Number(prompt("ucuncu terefi daxil edin"));

// if (a == b || a == c) {
//   console.log("bu ucbucaq beraber tereflidir");
// } else if (a !== b || a !== c) {
//   console.log("Bu muxtelif terefli ucbucaqdir");
// } else if (a == b || a == c || b == c) {
//   console.log("bu ucbucaq beraber yanlidir");
// }

// task3
// let num1 = Number(prompt("Reqeminizi daxil edin"));
// if (num1 % 2 === 0) {
//   console.log("bu reqem cutdur");
// } else if (num1 % 2 === 1) {
//   console.log("bu reqem tekdir");
// }

// task 4
// let reqem = Number(
//   prompt("Zəhmət olmasa sadəcı 1-12 aralığında ədəd daxil edin")
// );
// switch (reqem) {
//   case 1:
//     console.log("Yanvar");
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Iyun");
//     break;
//   case 7:
//     console.log("Iyul");
//     break;
//   case 8:
//     console.log("Avqust");
//     break;
//   case 9:
//     console.log("Sentyabr");
//     break;
//   case 10:
//     console.log("Oktyabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;

//   default:
//   // code block
// }

// task5
// let reqem = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (reqem > 0) {
//   if (reqem % 3 == 0 && reqem % 5 == 0) {
//     console.log("bu reqem her iki edede bolunur");
//   } else {
//     console.log("bolunmur");
//   }
// }

// task6
// let reqem = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (reqem > 0) {
//   if (reqem % 2 == 0) {
//     console.log("bolunur");
//   } else {
//     console.log("bolunmur");
//   }
// }

// task7
// let num1 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let num2 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let hasil = num1 * num2;
// if (hasil > 0) {
//   console.log("musbetdir");
// } else {
//   console.log("menfidir");
// }

//   task8
// let num1 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (num1 > 1 && num1 < 100) {
//   console.log("araliga daxildir");
// } else {
//   console.log("daxil deyil");
// }

// task9
// let num1 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let num2 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));

// let num3 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} maxdir`);
// } else if (num2 > num3) {
//   console.log(`${num2} maxdir`);
// } else {
//   console.log(`${num3} maxdir`);
// }

// task10
// let num1 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (num1 >= 0 && num1 < 100) {
//   if (num1 > 90) {
//     console.log("A");
//   } else if (num1 >= 80 && num1 < 90) {
//     console.log("B");
//   } else if (num1 >= 70 && num1 < 80) {
//     console.log("C");
//   } else if (num1 >= 60 && num1 < 70) {
//     console.log("D");
//   } else if (num1 < 59) {
//     console.log("F");
//   }
// }

// task11

// let num1 = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// if (num1 >= 0 && num1 < 100) {
//   if (num1 < 18) {
//     console.log("yeniyetme");
//   } else if (num1 >= 18 && num1 <= 64) {
//     console.log("yetkin");
//   } else if (num1 >= 65) {
//     console.log("yasli");
//   }
// }

// task12

// let x = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let y = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));

// if (x > 0 && y < 0) {
//   console.log(4 * x + 2 * y + 4);
// } else if (x > 0 && y == 0) {
//   console.log(2 * x - y + 3);
// } else if (x < 0 && y > 0) {
//   console.log(3*x+4*y+3);
// }

// task 13

// let x = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let y = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let emel = prompt("Zəhmət olmasa  emel daxil edin");
// switch (emel) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);

//     break;
//   case "*":
//     console.log(x * y);

//     break;
//   case "/":
//     console.log(x / y);
//     // code block
//     break;
//   default:
//     "Zəhmət olmasa düzgün əməl daxil edin yazılsın.";
// }

// task14
// let x = Number(prompt("Zəhmət olmasa  ədəd daxil edin"));
// let y = Math.floor(Math.random() * 100);

// for (let i = 5; i < 50; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }

// let sum=0
// for (let i = 0; i < 10; i++) {
//   console.log(sum+=i);
// }

// n = 10;
// m = 100;
// for (let i = n; i < m; i++) {
//   if (i % 2 == 0 && i % 7 == 0) {
//     console.log(i);
//   }
// }
// const arr = ["Meryem", "Murad", "Rufet"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr[0]);
// console.log(arr.length);

// 28.03.2024

// task1
// for (let i = 0; i < 5; i++) {
//   console.log("Mery");
// }

// task2
// let num1 = 20;
// for (let i = 0; i < num1; i++) {
//   console.log(num1 - i);
// }

// for (let i = 20; i > 0; i--) {
//   console.log(i);
// }

// task3
// const myArr = ["Bakı", "Gəncə", "Sumqayıt"];
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

// task4
// const myArr = ["Bakı", "Gəncə", "Sumqayıt"];
// let x = "";
// for (let x in myArr) {
//   console.log(x);
// }

// task5
// const myArr = ["Bakı", "Gəncə", "Sumqayıt"];
// let x = "";
// for (let x of myArr) {
//   console.log(x);
// }

// task6
// const myArr = [1, 4, 5, 6, 7, 8, 34, 56, 98];
// let sum = 0;
// for (let i = 0; i < myArr.length; i++) {
//   sum += myArr[i];
// }
// console.log(sum);

// task7
// for (let i = 0; i < 50; i += 3) {
//   console.log(i);
// }

// task8
// for (let i = 0; i < 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// task9
// for (let i = 0; i < 50; i++) {
//   if (i % 8 == 0) {
//     console.log(i);
//   }
// }

// task10
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   sum += i;
// }
// console.log(sum);

// task11
// let reqem = Number(prompt("reqem daxil et"));
// let hasil = 1;
// for (let i = reqem; i > 0; i--) {
//   hasil *= i;
// }
// console.log(hasil);

// task12
// for (let i = 0; i < 100; i++) {
//   if (i % 3 == 0) {
//     console.log(i + " Fizz");
//   }
//   if (i % 5 == 0) {
//     console.log(i + " Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + " FizzBuzz");
//   }
// }

// task13
// for (let i = 99; i < 1000; i++) {

//   let a = Math.floor(i / 100);
//   let b = Math.floor((i / 10) % 10);
//   let c = i % 10;
//   let cem = a ** 3 + b ** 3 + c ** 3;

//   if (cem == i) {
//     console.log(`${i} armstrong ededidir`);
//   }
// }

// task14
// let num = prompt("reqem daxil edin");

// let even = 0;
// let odd = 0;
// for (let i = 0; i < num.length; i++) {
//   if (i % 2 == 0) {
//     even += Number(num[i]);
//   } else {
//     odd += Number(num[i]);
//   }
// }
// console.log(even);
// console.log(odd);
// console.log(even * odd);

// task16
// const myArr = [2, 4, 7, 8];
// for (let i = 0; i < myArr.length; i++) {
//   if (myArr[i] % 2 == 0) {
//     console.log("cutdur");
//   } else {
//     console.log("tekdir");
//   }
// }

// task1 version 1
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

// let bosluq = 0;

// for (let i = 0; i < sampleNews.length; i++) {
//   if (sampleNews.charAt(i) == " ") {
//     bosluq++;
//   }
// }
// console.log(bosluq);

// task1 version2
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// let bosluq = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//   if (sampleNews[i] === " ") {
//     bosluq++;
//   }
// }
// console.log(bosluq);

// task1 version3
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;

// let bosluq = sampleNews.split(" ").length - 1;
// for (let i = 0; i < sampleNews[i].length; i++) {
//   console.log(bosluq);
// }

// task1 version4
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// const myArr = sampleNews.split(" ");
// console.log(myArr.length - 1);

// task2
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// const myArr = sampleNews.split(",");
// const myArr2 = sampleNews.split(".");

// console.log(myArr.length - 1);
// console.log(myArr2.length - 1);

// task2 version2
// const sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
// let noqte = 0;
// let vergul = 0;
// for (let i = 0; i < sampleNews.length; i++) {
//   if (sampleNews[i] === ".") {
//     noqte++;
//   } else if (sampleNews[i] === ",") {
//     vergul++;
//   }
// }
// console.log(vergul);
// console.log(noqte);
