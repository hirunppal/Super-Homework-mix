// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

f2c = (f) => {
  let c = ((f - 32) * 9) / 5;
  return c;
};
console.log(f2c(20));
