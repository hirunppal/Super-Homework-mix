// // ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// // และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา
let Object1 = {};

// let input1 = 0;
// input2 = 0;
// for (; input1 !== "stop" || input2 !== "stop"; ) {
//   //   Object1.newkey;
//   let input1 = prompt("Your key Here!");
//   let input2 = prompt("Your Value here!");
//   if (input1 !== "stop") Object1[input1] = input2;
// }
// console.log(Object1);

// // Object1.mane = "value";
// // Object1.x = x;
// // function ()

do {
  let input1 = prompt("Your key Here!");
  if (input1 == "stop") {
    break;
  }
  let input2 = prompt("Your Value here!");
  Object1[input1] = input2;
} while (input1 !== "stop");

// // console.log(Object1);
// let input1 = 0;
// do {
//   let input1 = prompt("Your key Here!");
//   lei input2 = prompt ('2222')
//  Object1[input1] = input2
//   do {
//     Object1.input2 = prompt("Your Value here!");
//   } while (input1 !== "stop");
// } while (input1 !== "stop");

// // function Object2 ()

// // function process(form) {
// //   console.dkir(form);
// //   var inputs = form.elements;
// //   for (let i = 0; i < inputs.length; i++) {
// //     console.log(i + ":" + inputs[i].name + ": " + inputs[i].value);
// //   }
// //   let names = inputs.map((e) => e.name);

// //   console.log(names);
// // }

// let input1 = prompt("Your key Here!");
// let input2 = prompt("2222");
// Object1[input1] = input2;
console.log(Object1);
