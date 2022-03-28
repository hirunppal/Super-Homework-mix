// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

// ```js
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// ```

function obcheck(objname) {
  let thisEmpthy = true;
  for (let k in objname) {
    thisEmpthy = false;
  }
  return thisEmpthy;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salariesB = {};

let sum = 0;

// console.log(salaries.John);
console.log("This is Salalies");

function sumsary(obj) {
  if (!obcheck(obj)) {
    for (const key in obj) {
      sum = sum + obj[key];
    }
    return sum;
  } else console.log("its empty");
}
//   for (let i in obj) {
//     x = x + +(i);
//   }return x

console.log(sumsary(salaries));
console.log(sumsary(salariesB));
