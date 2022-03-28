// <!-- - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ``` -->

// function mac(n1, n2, n3, n4) {
//   if (a === undefined) return undefined;
//   if (b === undefined) {
//     if (isValidNum(a)) return a;
//   }
// }

function mac(n1, n2, n3, n4) {
  if (n1 === undefined) return undefined;
  else {
    if (n2 === undefined) return Math.max(a);
    else {
      if (n3 === undefined) return Math.max(a, b);
      else {
        if (n4 === undefined) return Math.max(a, b, c);
      }
    }
  }
}
alert(mac(10, 20, 30, 40));
