// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str

// ```js
let str = "31 45 12 67 34 86 23 37 19 41";

// ```
let arr = str.split(" ");
let sumlow40 = 0;
arr.map((el) => {
  if (el < 40) sumlow40 += +el;
});
console.log(sumlow40);
