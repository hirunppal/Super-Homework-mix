// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

minmaxRan = (min, max) => {
  let x = min + Math.random() * (max - min);
  return x;
};

console.log(minmaxRan(10, 100));
