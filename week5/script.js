// ternary operator
// 20 % 2 == 0 ? console.log("salam") : console.log("sagol");

// spret
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// arr2[2] = 200;
// console.log(arr1);
// console.log(arr2);

const arr = ["mery", "murad", "rufet"];
function find(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
function myincludes(arr, cb) {}
myincludes(arr, (x) => x === "rufet");
find(myincludes);
