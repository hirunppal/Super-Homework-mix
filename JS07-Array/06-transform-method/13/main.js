// จงหา unique array element ของ alphabets

// ```js
// let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// // expected result: ['a', 'b', 'c', 'e', 'd']
// ```
let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// expected result: ['a', 'b', 'c', 'e', 'd']
let i = 0;
let result = [];
alphabets.map(function (el, index) {
  //   result.push(el);
  console.log(el);
  result.push(el);

  if (result.indexOf(el) !== result.lastIndexOf(el)) {
    result.pop();
  }

  // if (el !== result[i]) {
  //   i++;
  //   return el;
  // }
  //   else {result.shift()}
  //   }
});
console.log(result);
// let result = alphabets.map
