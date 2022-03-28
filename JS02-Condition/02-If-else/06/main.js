// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

let a = prompt("First Numb");
let b = prompt("Sec Numb");

if (!(Number(a) || Number(b) == undefined || null || NaN)) {
  alert("invalid Nmber");
} else {
  alert(+a + +b);
}
9;

// function isInvalidnumver(checkvalue) {
//   return !(checkvalue === null || checkvalue,
//   trim() === "" || checkvalue(input));
// }
// console.log(isInvalidnumver(20));
