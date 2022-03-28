// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F

let point = prompt("Ternary Grade Your Point");
point >= 80
  ? alert("Your Grade Isss A!")
  : point >= 70
  ? alert("Your Grade Isss B!")
  : point >= 60
  ? alert("Your Grade Isss C!")
  : point >= 50
  ? alert("Your Grade Isss D!")
  : alert("Your Grade Isss F!");
