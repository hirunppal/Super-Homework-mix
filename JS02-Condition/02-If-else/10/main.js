// เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators

// ```js
// let login = prompt("Enter username");
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
// ```

// let login = prompt("Enter username");
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

let login = prompt("Enter username");
let massage =
  login == "Employee"
    ? (message = "Hello")
    : login == "Director"
    ? (massage = "Greetings")
    : login == ""
    ? (message = "No login")
    : (message = "");
