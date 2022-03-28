// ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function lowernum(n1, n2) {
  let x;
  if (n1 < n2) {
    x = n1;
  } else if (n1 == n2) {
    x = "Equal";
  } else {
    x = n2;
  }

  return x;
}
console.log(lowernum(10, 20));
