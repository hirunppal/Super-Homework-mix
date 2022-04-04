// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

// ```js
// const persons = [
//   { name: 'John', sex: 'M' },
//   { name: 'Jody', sex: 'M' },
//   { name: 'Susan', sex: 'F' },
//   { name: 'Kate', sex: 'F' },
//   { name: 'Sid', sex: 'M' }
// ];
// // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

// ```
const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
const maleset = [];
const femaleset = [];

persons.map((element) => {
  if (element.sex === "M") {
    maleset.push(element);
  }
  if (element.sex === "F") {
    femaleset.push(element);
  }
});
console.log(maleset);
console.log(femaleset);
