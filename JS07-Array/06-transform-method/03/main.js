// จงเรียงข้อมูลใน arr จากมากไปหาน้อย

// ```js
const arr = [11, 17, 23, 13, 7, 19];
// ```
howcomp = (a, b) => {
  return a - b;
};
arr.sort(howcomp);
console.log(arr);
