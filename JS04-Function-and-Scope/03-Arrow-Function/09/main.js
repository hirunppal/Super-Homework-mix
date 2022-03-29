// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

leapyear = (num) => {
  if (num % 4 == 0) {
    if (num % 100 == 0) {
      if (num % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// divBy100 = (num) => {
//   if (num % 100 == 0) {
//     var awn = "Yeah Bro " + num + " Can Devied by seven";
//   }
//   return awn;
// };

leapyear2 = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
};

console.log(leapyear(201));
console.log(leapyear2(204));
