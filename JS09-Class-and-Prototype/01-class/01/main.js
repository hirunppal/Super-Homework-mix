// - ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// - value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// - sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// - subtract() ให้รับค่าตัวเลขและหักออกจาก value
// - multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// - divide() ให้รับค่าตัวเลขและนำไปหาร value
// - show() ให้ alert ค่า value

class Calculator {
  constructor(value) {
    this.value = value;
    console.log(this.value);
  }
  sum() {
    this.value = this.value + +prompt("Num to sum");
    console.log(this.value);
  }
  subtract() {
    this.value = this.value - +prompt("Num to subtract");
    console.log(this.value);
  }
  multiply() {
    this.value = this.value * +prompt("Num to multiply");
    console.log(this.value);
  }
  divide() {
    this.value = this.value / +prompt("Num to divide");
    console.log(this.value);
  }
  show() {
    alert(this.value);
    console.log(this.value);
  }
}

let newvalue = new Calculator(10);
newvalue.sum();
newvalue.subtract();
newvalue.multiply();
newvalue.divide();
newvalue.show();
