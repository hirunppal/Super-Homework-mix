// ให้เขียนโค้ดแสดงรูปดอกจันตามรูปแบบด้านล่าง โดยแสดงผลออกมาใน console

// ```
// *
// *	*
// *	*	*
// *	*	*	*
// ```

// หมายเหตุ : คำสั่งขึ้นบรรทัดใหม่ใน console ให้ใช้ \n
// for (var j = 1; (j = i); )
// var time = 0;
// var line = "";

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= i; j++) {
//     line = "* ".repeat(i);
//   }
//   console.log(String(line));
//   // line = 0;
// }

let time = 0;
let line = "";

for (var i = 1; i < 5; i++) {
  for (var j = 1; j < 5; j++) {
    if (i <= j) {
      line += "* ";
    }
    // line += "* ";
    // else {
    //   line += " ";
    // }
  }
  line += "\n";
  // line = 0;
}
console.log(line);
