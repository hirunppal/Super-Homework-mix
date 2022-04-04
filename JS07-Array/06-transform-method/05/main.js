// จงเรียงข้อมูล object ใน arr โดยเรียงตามค่า age จากน้อยไปหามาก
// ```js
// const arr = [
//   { name: 'John', age: 25 },
//   { name: 'Leon', age: 26 },
//   { name: 'Mick', age: 29 },
//   { name: 'Pete', age: 30 },
//   { name: 'Mary', age: 28 }
// ];

const arr = [
  { name: "John", age: 25 },
  { name: "Leon", age: 26 },
  { name: "Mick", age: 29 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 },
];

howcomp = (a, b) => {
  return a.age - b.age;
};
arr.sort(howcomp);
console.log(arr);
