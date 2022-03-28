// // จงแปลงโค้ดเป็นแบบ if-else

// ```js
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }
// ```;

let a = prompt("browsser?");

if (a == "Edge") {
  alert("You've got the Edge!");
} else if (a == "Chrome" || a == "Firefox" || a == "Safari" || a == "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
