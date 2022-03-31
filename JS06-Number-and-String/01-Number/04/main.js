// - จงเขียนฟังก์ชันในการแปลงตัวเลข โดยให้ผลลัพธ์เป็นตัวเลขที่มีทศนิยม 2 ตำแหน่ง
// - หากตัวเลขที่ต้องการแปลงไม่มีจุดทศนิยมหรือมีทศนิยมไม่ถึง 2 ตำแหน่งให้เติมเลข 0 ต่อท้ายจนได้ทศนิยม 2 ตำแหน่ง
// - หากตัวเลขที่ต้องการแปลงมีจุดทศนิยมมากกว่า 2 ตำแหน่งให้ปัดตัวเลขตั้งแต่หลังจุดทศนิยมตำแหน่งที่ 2 ทิ้งให้หมด
// - เช่น แปลง 10 ต้องได้ 10.00, แปลง 5.1 ต้องได้ 5.10, แปลง 3.1289 ต้องได้ 3.12

funcdemical = (x) => {
  let y = Math.trunc(Math.trunc(Math.round(x * 1000)) / 10) / 100;
  let z = y.toFixed(2);
  return z;
};

//test function
minmaxRan = (min, max) => {
  let x = min + Math.random() * (max - min);
  return x;
};

for (let i = -1000; 1 <= 1000; i++) {
  let z = minmaxRan(-1000000, 1000000);
  console.log(z);
  console.log(funcdemical(z));
}
// console.log(funcdemical(5.1));
// console.log(funcdemical(-5.1181));
// console.log(funcdemical(-5.0));
// console.log(funcdemical(-5.0));
// console.log(funcdemical(-100093.28899994));
