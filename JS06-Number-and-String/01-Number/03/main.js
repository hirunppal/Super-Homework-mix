// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง
funcPoint = (buyed) => {
  point = Math.floor(buyed / 100);
  return point;
};
console.log(funcPoint(102042));
console.log(funcPoint(1000));
console.log(funcPoint(12422));
console.log(funcPoint(2442551));
console.log(funcPoint(8571));
console.log(funcPoint(5431));
