// ให้สร้างฟังก์ชัน checkPermission โดยมีพารามิเตอร์ 3 ตัว

// - ตัวแรกเป็น role
// - ตัวที่สองเป็นฟังก์ชันและทำงานเมื่อ role มีค่าเท่ากับ “ADMIN”
// - ตัวที่สามเป็นฟังก์ชันและทำงานเมื่อ role ไม่ใช่ “ADMIN”
// - ให้ลองเรียกใช้ฟังก์ชันโดย
// - ถ้า role เป็น “ADMIN” ให้ alert “ACCESS GRANTED”
// - ถ้า role ไม่ใช่ “ADMIN” ให้ alert “ACCESS DENIED”

const checkPermission = function (role, yes, no) {
  if (role == "AdMIN") {
    yes();
  } else {
    no();
  }
};

// checkPermission("ADMIN"),
//   function () {
//     alert("ACESS GRANTED");
//   },
//   function () {
//     alert("ACESS DENIED");
//   };

const grandted = function () {
  alert("ACESS GRANTED");
};
const denied = function () {
  alert("ACESS DENIED");
};
