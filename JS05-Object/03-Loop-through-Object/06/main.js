// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

itemls = {};
function fillitem(name, amu, price, discout) {
  this.name = name;
  this.amu = amu;
  this.price = price;
  this.discout = discout;
}

const obj1 = new fillitem("a", "b", "c", "d");
console.log(obj1);

let i = 0;
do {
  var input1 = prompt("ชื่อสินค้า!");
  if (input1 == null) {
    break;
  }

  var input2 = prompt("จำนวนที่ขาย!");
  if (input2 == null) {
    break;
  }
  var input3 = prompt("ราคาต่อชิ้น!");
  if (input3 == null) {
    break;
  }
  var input4 = prompt("และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์!");
  if (input4 == 0 || input4 == null || input4 == undefined) {
    const itemlist = fillitem(input1, input2, input3);
  } else if (input4 > 0) {
    const itemlist = fillitem(
      input1,
      input2,
      "discounted =" + input2 * (100 - input4),
      input4
    );
  }
} while (input1 == true);

console.log(itemlist);
