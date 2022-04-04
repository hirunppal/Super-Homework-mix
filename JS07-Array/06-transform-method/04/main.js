// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก

// ```js
// ```
const arr = [-3, 2, 0, -7, 4, 6];

function howcomp(a, b) {
  return a ** 2 - b ** 2;
}
arr.sort(howcomp);
console.log(arr);
