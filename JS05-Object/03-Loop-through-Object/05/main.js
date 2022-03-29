// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
Object1 = {};

do {
  let input1 = prompt("Your Fruits name!");
  if (input1 == "stop") {
    break;
  }
  var input2 = prompt("Your amout!");
  if (input2 > 1) {
    Object1[input1 + "s"] = input2;
  } else Object1[input1] = input2;
} while (input2 !== "stop");

console.log(Object1);
