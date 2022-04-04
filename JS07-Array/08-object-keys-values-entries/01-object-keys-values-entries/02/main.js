// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

checkEmptyObj = (obj) => {
  let x = obj.map(function (element) {
    if (element !== undefined && element !== null) {
      element = Object.values(obj);
      return true;
    }
    return false;
  });
};

let obj1 = [1, 5, 6, 2];
let obj2 = [];
console.log(checkEmptyObj(obj1));
console.log(checkEmptyObj(obj2));
