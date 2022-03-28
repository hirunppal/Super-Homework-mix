// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

divBy7 = (num) => {
  if (num % 7 == 0) {
    var awn = "Yeah Bro " + num + " Can Devied by seven";
  }
  return awn;
};
console.log(divBy7(49));
