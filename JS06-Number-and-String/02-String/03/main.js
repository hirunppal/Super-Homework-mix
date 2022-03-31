// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

ucFirst = (str) => {
  var firstupper = str.slice(0, 1);
  var firstupped = firstupper.toUpperCase();
  console.log(firstupped);
  var leftover = str.slice(1);
  var upped = `${firstupped}${leftover}  `;
  return upped;
};
console.log(ucFirst("can you up me"));
