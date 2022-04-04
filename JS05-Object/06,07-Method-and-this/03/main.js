// - ให้สร้าง Object calculator ซึ่งมี 3 method
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// ```js
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// ```

// let inputter1 = Number(prompt("inp me 1"));
// let inputter2 = Number(prompt("inp me 2"));

// let calculator = {
//   read: function (inputter1, inputter2) {
//     return {
//       input1: inputter1,
//       input2: inputter2,
//       ref: this,
//     };
//   },
//   sum: function () {
//     let info = this.read(inputter1, inputter2);
//     {
//       console.log(this.info);
//       let suma = info.input1 + info.input2;
//       //   console.log(info.ref.input1);
//       return suma;
//     }
//   },
//   mul: function () {
//     let info = this.read(inputter1, inputter2);
//     {
//       console.log(info);
//       let multi = info.input1 * info.input2;
//       //   console.log(info.ref.input1);
//       return multi;
//     }
//   },
// };
// calculator.read(inputter1, inputter2);
// console.log(calculator.read(inputter1, inputter2));
// alert(calculator.sum());
// alert(calculator.mul());

// read = function (inp1, inp2) {
//   return {
//     input1: inp1,
//     input2: inp2,
//   };
// };

// let calculator = {
//   read: function (inp1, inp2) {
//     return {
//       input1: inp1,
//       input2: inp2,
//     };
//   },
// };
// console.log(calculator.read(10, 20));
// let imfo


// new wat
let calculator2 = {
  reday: function () {
    
    this.input1= +(prompt('enter n1')),
    this.input2= +(prompt('enter n1')),
      
    //เพิ่ม key ให้ calculator 
  },
  sum: function () {
    return this.input1 + this.input2
    
  },
  mul: function () {
    return this.input1 * this.input2
    }
  
};

// console.log(calculator.read(inputter1, inputter2));
// alert(calculator.sum());
// alert(calculator.mul());

// way constructor

const calculator3 = new calculator3
