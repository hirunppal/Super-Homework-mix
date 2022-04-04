const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const narray1 = array1.map(function (element) {
  return element * 2;
});
console.log("ans arr1");
console.log("Newar1 = \n" + narray1);
const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const narray2 = array2.map(function (element) {
  return String(element);
});
console.log("ans arr2");
console.log(narray2);

const array3 = [1, "1", 2, {}];
// result: ["number", "string", "number", "object"]
const narray3 = array3.map(function (element) {
  return typeof element;
});
console.log("ans arr3");
console.log(narray3);

const array4 = ["apple", "banana", "orange"];
// result: ["APPLE", "BANANA", "ORANGE"]
const narray4 = array4.map(function (element) {
  return element.toUpperCase;
});
console.log("ans arr4");
console.log(narray4);

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const narray5 = array5.map(function (element) {
  if (element % 2 == 0) {
    return "even";
  } else {
    return "Odd";
  }
});
console.log("ans arr5");
console.log(narray5);

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const narray6 = array6.map(function (element) {
  return Math.abs(element);
});
console.log(narray6);

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const narray7 = array7.map(function (element) {
  return String(Number(element).toFixed(2));
});
console.log(narray7);

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const narray8 = array8.map(function (element) {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct ",
    "Nov",
    "Dec",
  ];
  return month[element];
});
console.log(narray8);

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const narray9 = array9.map(function (element) {
  return Math.sqrt(Math.sqrt(Number(element)));
});
console.log(narray9);

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: ["apple", "banana", "watermelon"]
const narray10 = array10.map(function (element) {
  return element.name;
});
console.log(narray10);

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: [14, 18, 32]
const narray11 = array11.map(function (element) {
  return element.age;
});
console.log(narray11);

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const narray12 = array12.map(function (element) {
  return `${element.name} ${element.surname}`;
});
console.log(narray12);

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const narray13 = array13.map(function (element, index, array) {
  array[index].age = 2020 - element.birth.slice(0, 4);
  return element;
});
console.log(narray13);

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];

let newarr = array14.map(function (element, index) {
  let rebit = String(element.birth).split("-").reverse().join(" ");

  return rebit;
});
// console.log(newarr);

let Montharr = newarr.map(function (element) {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct ",
    "Nov",
    "Dec",
  ];
  let splitedbroEle = element.split(" ");
  let midmonth = month[Number(element.slice(3, 5) - 1)];
  // super noteee
  // console.log(Number(element.slice(3, 5)) - 1);
  // console.log(midmonth);
  return splitedbroEle[0] + " " + midmonth + " " + splitedbroEle[2];
  return element
    .split(" ")
    .splice(1, 1, `${month[Number(element.split(" ").slice(1, 1))]}`)
    .join(" ");
});

// nomore
let combineDate;

// console.log(Montharr);
// return newarr;

const narray14 = array14.map(function (element, index) {
  return `<tr><td>${element.name}</td><td>${Montharr[index]}</td></te>`;
});

console.log(narray14);
