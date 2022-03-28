// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
// - ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”

let awn = prompt("Even Or Odd");
if (awn % 2 == 0) {
  alert("Even");
} else if (awn === "0") {
  alert("zero");
} else {
  alert("Odd");
}

// function isInvalidnumver(checkvalue) {
//   if (checkvalue === null) {
//     return false;
//   } else if (checkvalue.trim() === "") {
//     return false;
//   } else if (isNaN(checkvalue)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(isInvalidnumver(20));
