// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// ```js
// before
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: "My menu",
// };
// //f ```

function multiplyNumeric(obj, num) {
  const result = {};
  for (let k in obj) {
    if (!isNaN(obj[k])) {
      result[k] = obj[k] * num;
    } else result[k] = obj[k];
  }
  return result;
}

console.log(multiplyNumeric(menu, 3));

console.log(menu);
// console.log(result);
// for (const k in obj){
//     if (!(Number(menu[k] == 0|| Number(menu[k] == null || Number(menu[k] == undefined || Number(menu[k] == NaN))
//                         {
//                             obj.obj[k] = obj.obk[k] *3;
//                             console.log(menu)
//                         }
//                     }
// }
