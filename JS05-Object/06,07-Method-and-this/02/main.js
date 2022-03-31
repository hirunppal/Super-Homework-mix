// ผลลัพธ์ในบรรทัดที่มี *
//   มีค่าเป็นอะไรและเพราะอะไร```js
// var name = 'Joe';
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this
//   };
// }
// let user = makeUser();
// console.log(user.ref.name); // *
// ```;

var name = "Joe";

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();
console.log(user.ref.name);
// user ไปรับอ้างอิง return จาก function makeuser ทำให้ได้รับค่าเป็น
// {
//     name: "John",
//     ref: this,
// };
// และเมือไปเลือกตัว ref ได้ค่าเป็น This ทำให้กลับมาเป็นค่า this.name = user.name =john
