// - จงเขียนฟังก์ชัน copySorted(arr) เพื่อ return array ที่เรียงข้อมูลใน arr จากน้อยไปหามาก โดยที่ arr ต้องมีค่าเหมือนเดิม
// - ตัวอย่างผลลัพธ์

// ```js
// ```
copySorted = (arrip) => {
  let cloned = arrip.map(function (element) {
    return element;
  });
  return cloned.sort();
};
let arr = ["React", "Vue", "Angular"];
let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console .log(arr); // React, Vue, Angular (no changes)

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)
