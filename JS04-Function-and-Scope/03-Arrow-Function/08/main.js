// // ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน
// more = false;

ballPoint = (win) => {
  let point = 0;
  if (win) {
    point = point + 3;
  } else {
    point = point + 0;
  }

  return point;
};

console.log(ballPoint(true));
//   for (var didwin = prompt("Did We Win or Lost?"); more == true; ) {}
// };
