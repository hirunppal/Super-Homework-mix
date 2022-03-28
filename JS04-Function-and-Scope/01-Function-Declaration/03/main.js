// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *
// }

// logMessage(message);
// console.log(message); // **
// ```

// ```js
// let name = "John";

// function sayHi(input) {
//   console.log(name); // ***
//   name = input;
// }

// sayHi();
// console.log(name); // ****
// ```

let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * console log Hello everybody
}

logMessage(message);
console.log(message); // ** console log Welcome to thailand

let name = "John";

function sayHi(input) {
  console.log(name); // *** Jhon
  name = input;
}

sayHi();
console.log(name); // **** Undifined
