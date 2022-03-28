let a = 1;
console.log(" a is " + a);

let b = 2;
console.log(" a is " + a + " b is " + b);

let c = a++;

console.log(" a is " + a + " b is " + b + " c is " + c);

let d = ++c;
console.log(" a is " + a + " b is " + b + " c is " + c + " d is " + d);

let e = ++d + d++ + d;

console.log(
  " a is " + a + " b is " + b + " c is " + c + " d is " + d + " e is " + e
);

// a is 1
// main.js:5  a is 1 b is 2
// main.js:9  a is 2 b is 2 c is 1
// main.js:12  a is 2 b is 2 c is 2 d is 2
// main.js:16  a is 2 b is 2 c is 2 d is 4 e is 10
