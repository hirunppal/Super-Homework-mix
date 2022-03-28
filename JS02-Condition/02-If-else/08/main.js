// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let point = prompt("Your Point Here Kidd");
if (point >= 80) {
  alert("You Get Grade A!!!");
} else if (point >= 70) {
  alert("You Get Grade B!!!");
} else if (point >= 60) {
  alert("You Get Grade C!!!");
} else if (point >= 50) {
  alert("You Get Grade D!!!");
} else {
  alert("You Get Grade F!!!");
}
