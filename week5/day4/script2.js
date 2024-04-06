// Employee function constructor yaradin - (name, surname, age, isMale - default true,department, experienceYear, salary - default sifir) olmalidir.
// getFullName() methods olmalidir ve result olaraq: meselen John Doe-dirse, D.JOHN return etmelidir.
// generateID() method-u olmalidir ve department-in ilk 2 herfi boyuk simvollarla + Math.random istifade edib 4 reqemli eded, 'PO2353'
// sheklinde olmalidir.
// bir globalFunction yaradin: searchEmployee() -> parametr olaraq bir array qebul edir ve yeni bir array return edir
// bu function-da daxil olunan array-den experienceYear 5-den cox olan,yashi 20-35 araliginda olan
// department-i IT ve ya Design olan ishcileri tapmali ve yeni array-e
// yigmalisiniz. Yeni array-de element-ler object sheklinde olmalidir ve {fullName: D.JOHN,salary:2000,department:'IT',age:45,id:IT2842} bu formada
// olmalidir.

function Employee(
  name,
  surname,
  age,
  isMale = true,
  department,
  experienceYear,
  salary = 0
) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.isMale = isMale;
  this.department = department;
  this.experienceYear = experienceYear;
  this.salary = salary;
  this.getFullName = function () {
    return this.surname[0] + " ." + this.name;
  };
  this.generateID = function () {
    return (
      this.department.slice(0, 2).toUpperCase() +
      Math.floor(Math.random() * 9000 + 1000) +
      "PO2353"
    );
  };
}
const Rufet = new Employee("Rufet", "Nesibov", 20, true, "Itjcnkzcj", 3, 1000);
const Mery = new Employee("Mery", "Osmanova", 19, false, "Front", 4, 2000);
const Murad = new Employee("Murad", "Adizada", 21, true, "Back", 2, 1500);

console.log(Rufet.getFullName());
console.log("______________________________________");

console.log(Rufet.generateID());
console.log(Mery.generateID());
console.log("______________________________________");
