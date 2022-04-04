// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่า Value !!!อยู่ระหว่าง a กับ b
arr = [2, 4, 5, 6, 7, 75, 4, 3, 5, 6, 7, 8, 765, 3, 2];
const filterRange = (arr, a, b) => {
  let result = arr.filter(function (element, index) {
    if (element >= a && element <= b) {
      return true;
    }
  });
  console.log(result);
};
filterRange(arr, 2, 6);
