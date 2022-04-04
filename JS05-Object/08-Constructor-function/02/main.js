// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {
  this.curreentValue = startingValue;
  this.read = function () {
    var xvalue = +prompt("Numplz");
    this.curreentValue = xvalue + this.curreentValue;
    return;
  };
  this.show = function () {
    alert(this.curreentValue);
  };
}

// Constructorfunction(10);
// console.log(Accumulator(20));
// console.log(Accumulator(ale));
const acc = new Accumulator(20);
acc.read();
acc.show();
