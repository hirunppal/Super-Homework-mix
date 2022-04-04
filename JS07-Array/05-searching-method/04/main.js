// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0

// ```js
// // expexted result: -5
// ```

const nums = [7, 9, -5, -1, 0, 3];
let x = nums.find(function (element, index, array) {
  if (element < 0) {
    return true;
  } else {
    return false;
  }
});
console.log(x);
