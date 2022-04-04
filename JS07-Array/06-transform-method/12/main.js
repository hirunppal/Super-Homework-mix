// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

// ```js
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]
// ```
let x = [];
flattened.map(function (element) {
  x.push(element[0]);
  x.push(element[1]);
});
console.log(x);
