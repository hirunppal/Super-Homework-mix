// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

let user = {
  name: "Pal",
  surname: 23,
};
let empty = {};
let thisEmpthy = true;

for (let k in user) {
  thisEmpthy = false;
}
console.log("Obg User is empty?" + thisEmpthy);
thisEmpthy = true;

for (let j in empty) {
  thisEmpthy = false;
}
console.log("Obg empty is empty?" + thisEmpthy);
thisEmpthy = true;

for (let k in user) {
  thisEmpthy = false;
}
console.log("Obg User is empty?" + thisEmpthy);
thisEmpthy = true;

//fuction style
function obcheck(objname) {
  let thisEmpthy = true;
  for (let k in objname) {
    thisEmpthy = false;
  }
  return thisEmpthy;
}

console.log(obcheck(empty));
