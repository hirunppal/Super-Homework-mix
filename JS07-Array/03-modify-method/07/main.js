// ให้เขียนโค้ดเพื่อ remove element ในตัวแปร fish ออกให้หมด

// ```js
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// ```
let fish = ["angel", "clown", "mandarin", "sturgeon"];

deleteallArr = (arr) => {
  for (i = 0; i < arr.length; ) {
    arr.pop();
  }
  return arr;
};
console.log(deleteallArr(fish));
