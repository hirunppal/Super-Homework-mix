// จงหาผลรวมของ element ใน array โดยใช้ forEach

// ```js
const array = [29, 17, 13, 47, 23, 31];

// // ```
let sum = 0;
let bro = array.forEach((element) => {
  sum += element;
});
console.log(sum);
