// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้

// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)
var sum = 0;
var sumev = 0;
var sumod = 0;
var sumev2 = 0;
var sumev3 = 0;
for (j = 0; j < 100; ) {
  j++;
  console.log("j=" + j);
  sum = sum + j;
  if (j % 2 == 0) {
    sumev = sumev + j;
  }
  if (j % 2 == 1) {
    sumod = sumod + j;
  }

  if (j % 2 == 0) {
    sumev2 = sumev2 + j ** 2;
  }
  if (j % 3 == 0) {
    sumev3 = sumev3 + j ** 2;
  }
}
console.log("sum all = " + sum);
console.log("sum even = " + sumev);
console.log("sum odd = " + sumod);
console.log("sum Evponential even 2 - even 3 = " + (sumev2 - sumev3));
