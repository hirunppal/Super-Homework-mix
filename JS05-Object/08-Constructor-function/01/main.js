// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// var inp1 = prompt("Input Number1");
// var inp2 = prompt("Input Number2");
// let Objectcal = {
//   read: function () {},

//   sum: function () {},
//   mul: function () {},
// };

// console.log(Objectcal);

let calculator = {
  read: function (inp1, inp2) {
    return {
      input1: inp1,
      input2: inp2,
      ref: this,
    };
  },
  sum: function () {
    let info = this.read(10, 20);
    {
      console.log(info);
      let suma = info.input1 + info.input2;
      //   console.log(info.ref.input1);
      return suma;
    }
  },
  mul: function () {
    let info = this.read(10, 20);
    {
      console.log(info);
      let multi = info.input1 * info.input2;
      //   console.log(info.ref.input1);
      return multi;
    }
  },
};
calculator.read(10, 20);
console.log(calculator.read(10, 20));
alert(calculator.sum());
alert(calculator.mul());
