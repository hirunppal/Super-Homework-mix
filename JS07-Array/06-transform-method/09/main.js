// จงหาค่ามากสุดและน้อยสุดใน arr

// ```js
// ```

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

function howcompmax(a, b) {
  return a + b;
}
console.log(arr.sort(howcompmax)[0]);

function howcompmin(a, b) {
  return a - b;
}
console.log(arr.sort(howcompmin)[0]);
