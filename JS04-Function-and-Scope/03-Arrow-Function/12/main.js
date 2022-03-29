// ให้เขียนฟังก์ชันคำนวณค่า factorial

// do {

// }while()

// let stack = 1;
// while (number ) {
//     stack = number * (number - 1);
//     number = number - 1;
// }
// return stack;
// };

facto2 = (number) => {
  for (i = number; 1 >= 2; i--) {
    var stack2 = number * (number - 1);
    number = number - 1;
  }
  return stack2;
};

console.log(facto2(10));

facrecursive = (number) =>
  number === 0 || number === 1 ? 1 : number * facrecursive(number - 1);
console.log;
