// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

// ```js
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 },
//   { score: 95, subject: 'CSS', weight: 0.3 },
//   { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
// // expected result: 89
// ```
const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
// expected result: 89

let wightMul = 0;
scores.map((element) => {
  wightMul += element.score * element.weight * scores.length;
});
console.log("Sum W AVG:" + wightMul / scores.length);
