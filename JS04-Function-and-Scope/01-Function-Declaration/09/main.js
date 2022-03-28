// - ให้สร้างฟังก์ชันเช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
// - ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

// let np1 = prompt("inpur min Number");
let np2 = prompt("inpur max Number");

function isprime(number) {
  for (let l = 2; l <= number - 1; l++) {
    if (number % l === 0)
      // console.log(l);
      return false;
  }
  return true;
}

function primerange(n2) {
  var count = 0;
  for (let i = 2; i <= n2; i++) {
    if (isprime(i)) {
      console.log(i);
      count = count + 1;
    }
  }
  return count;
}
primerange(np2);
console.log("all the prime =" + count);
