// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

// ```js
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// // expexted result: [0, 2, 4]
// ```
const alphabets = ["a", "b", "a", "c", "a", "d"];
// expexted result: [0, 2, 4]

let next = 0;
let result = "";
let result2 = [];
let result3 = [];
for (let i in alphabets) {
  if (alphabets.indexOf("a", next) !== -1 && i !== {}) {
    result = +alphabets.indexOf("a", next);
    if (result !== result3[result3.length]) {
      result3.push(result);
      next = next + 1;
    }
    console.log(+alphabets.indexOf("a", next));
  }
}
// console.log(result);

howmanya = (arry) => {
  arry.filter(function (element, index) {
    if (element === "a") {
      result2.push(index);
      return true;
    } else {
      return false;
    }
  });
};
howmanya(alphabets);
console.log(result2);
console.log(result3);
