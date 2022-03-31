// จงเขียนฟังก์ชันในการสุ่มตัวเลขลูกเต๋า โดยผลลัพธ์ต้องเป็นตัวเลขจำนวนเต็มตั้งแต่ 1 ถึง 6

Randice = () => {
  let x = 0 + Math.random() * (6 - 0);
  return Math.floor(x + 1);
};

console.log(Randice());
console.log(Randice());
console.log(Randice());
console.log(Randice());
