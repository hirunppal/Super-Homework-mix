// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

// for ((x= '0' || < 0 || NaN || ' ' || undefined ) {
//     ;
// }
let count = -1;
let sum = 0;

do {
  var x = prompt("Fill the Numb");
  sum = sum + +x;
  count = count + 1;
} while (!(0 > x || x == 0 || x == NaN || x == undefined || x == null));
console.log(count);
console.log(sum);
let avg = +sum / +count;
console.log(avg);

// if (Number(a) || Number(b) == undefined || null || NaN) {
//     alert("invalid Nmber");
//   } else {
//     alert(a + b);
//   }
