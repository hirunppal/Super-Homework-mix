// d; // ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

// ```js
const array1 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10

let more10 = array1.filter(function (element, index) {
  if (element > 10) {
    return true;
  }
});
console.log(more10);

const array2 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
let khee = array2.filter(function (element, index) {
  if (element % 2 == 1) {
    return true;
  }
});
console.log(khee);

const array3 = [1, "1", 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
let numb = array3.filter(function (element, index) {
  if (typeof element === "number") {
    console.log(typeof element);
    return true;
  } else return false;
});
console.log(numb);

const array4 = ["apple", "banana", "orange", "pineapple", "watermeon"];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
let more6str = array4.filter(function (element, index) {
  if (element.length > 6) {
    return true;
  }
});
console.log(more6str);

const array5 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
let numpositive = array5.filter(function (element, index) {
  if (element > 0) {
    return true;
  }
});
console.log(numpositive);
const array6 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว

const divby3 = array6.filter(function (element, index) {
  if (element % 3 == 0) {
    return true;
  }
});
console.log(divby3);

const array7 = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
// ค่าที่ขึ้นต้นด้วยตัว E
const stwE = array7.filter(function (element, index) {
  if (element.startsWith("E")) {
    return true;
  }
});
console.log(stwE);

const array8 = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const isallupper = array8.filter(function (element, index) {
  if (element.toUpperCase === element) {
    return true;
  }
});
console.log(isallupper);

const array9 = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const isburi = array8.filter(function (element, index) {
  if (element.includes("buri")) {
    return true;
  }
});
console.log(isburi);

const array10 = [
  { name: "Ben", age: 14 },
  { name: "Phil", age: 18 },
  { name: "John", age: 32 },
  { name: "Ann", age: 16 },
  { name: "Paul", age: 24 },
];
// อายุไม่น้อยกว่า 18

const is18plus = array10.filter(function (element, index) {
  if (element.age >= 18) {
    return true;
  }
});
console.log(is18plus);

const array11 = [
  { id: 1, name: "Pepsi" },
  { id: 2, name: "Mirinda" },
  { id: 3, name: "Coke" },
  { id: 4, name: "Fanta" },
  { id: 5, name: "Sprite" },
];
// id ไม่เท่ากับ 4

const isnot4 = array11.filter(function (element, index) {
  if (element.id !== 4) {
    return true;
  }
});
console.log(isnot4);

const array12 = [
  { name: "John", birth: "2001-07-31" },
  { name: "Jack", birth: "1990-06-24" },
  { name: "Jim", birth: "1984-12-13" },
  { name: "Jeff", birth: "1996-02-05" },
  { name: "Joe", birth: "2002-06-13" },
];
// เกิดเดือน 6
// ```

const isbirth6thm = array12.filter(function (element, index) {
  if (element.birth.includes("06", 4, 7) == 6) {
    return true;
  }
});
console.log(isbirth6thm);
