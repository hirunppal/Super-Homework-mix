// จงนับชื่อที่ปรากฏใน names

// ```js
// let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// ```
let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
elementCfumc = (arr, name2Count) => {
  // ฟอร์มนัมก่อน
  var Xelemento = arr[0];
  var counto = 0;
  let elementSame = arr.map((element) => {
    if (element === Xelemento) {
      counto = counto + 1;
      return `${name2Count}: ${counto}`;
    } else {
    }
  });

  return;
}; // end of function

//OutterFunction
let i = 0;

names.forEach((element) => {
  if (element === names[i]) {
    i = element.indexOf();
  } else if (element !== names[i]) {
  }
});
