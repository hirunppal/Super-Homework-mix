// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values และ Object.entries

// ```js
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// ```
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// for (let i in salaries) {
//   Object.values;
// }
// salaries.map();
sum = 0;
Object.values(salaries).map((el) => {
  sum += el;
});
console.log(sum);
