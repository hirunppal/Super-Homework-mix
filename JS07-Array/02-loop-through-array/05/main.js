// ให้ใช้ forEach และ console.log ให้ได้ผลลัพธ์แบบใน comment ด้านล่าง

// ```js
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// // 1. Mike
// // 2. Sid
// // 3. Jack
// // 4. Bill

// ```
const names = ["Mike", "Sid", "Jack", "Bill"];
// let i = 0;
names.forEach((element, index) => {
  // i++;
  console.log(`${index + 1}. ` + element);
});
