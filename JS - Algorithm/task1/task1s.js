// 1. arr=[23,1,5,3,12,4,9,81,7,11,22,31,6]

// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)
function replaceMaxEvenMinOdd(arr) {
  let maxEven = null;
  let minOdd = null;
  let maxEvenindex = -1;
  let minOddindex = -1;

  // max cut ededin ve onun indeksinin tapilmasi

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (maxEven === null || arr[i] > maxEven) {
        maxEven = arr[i];
        maxEvenindex = i;
      }
    }
  }

  // min tek eded ve onun indexsinin tapilmasi
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (minOdd === null || arr[i] < minOdd) {
        minOdd = arr[i];
        minOddindex = i;
      }
    }
  }

  // max cut ve min tekin yerinin deyisdirilmesi
  if (maxEvenindex !== -1 && minOddindex !== -1) {
    let repalceNum = arr[maxEvenindex];
    arr[maxEvenindex] = arr[minOddindex];
    arr[minOddindex] = repalceNum;
  }
  return arr;
}

let arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
console.log(arr);
const result = replaceMaxEvenMinOdd(arr);
console.log(result);
