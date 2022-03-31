// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

Constructorfunction = (startingValue) => {
  this.curreentValue = startingValue;
  this.read = function () {
    var x = prompt("Numplz");
    var y = x + curreentValue;
    console.log("x");
    return;
  };
  this.show = function () {
    alert(read());
  };
};

// Constructorfunction(10);
console.log(Constructorfunction());
