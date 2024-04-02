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
const person = {
  fullName: function (frname, frsurname) {
    return (
      this.firstName + " " + this.lastName + " " + frname + " " + frsurname
    );
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
const result2 = person.fullName.call(person1, "rufet", "nesib");
const result1 = person.fullName.apply(person1, ["rufet", "nesib"]);
console.log(result1);
console.log(result2);

const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person3.fullName.bind(member);
console.log(fullName());
