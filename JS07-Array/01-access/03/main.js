// ให้ทำตามขั้นตอนดังนี้
// - สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// - เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
// i
let styles = ["Jass", "Blues"];

styles[styles.length] = "Rock-n-Roll";
console.log(styles);

if (styles.length % 2 == 0) {
  styles[styles.length / 2] = "Classic";
} else {
  styles[styles.length / 2 - 0.5] = "Classic";
}
console.log(styles);

delete styles[0];

console.log(styles.length);
console.log(styles);
