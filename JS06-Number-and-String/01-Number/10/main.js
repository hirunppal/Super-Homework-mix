// จงเขียนฟังก์ชันในการแปลงค่าจากองศาเป็นเรเดียน

funcDegree2R = (degree) => {
  let red = (2 * Math.PI * degree) / 360;
  return red;
};

console.log(funcDegree2R(180));
console.log(funcDegree2R(90));
console.log(funcDegree2R(30));
console.log(funcDegree2R(45));
console.log(funcDegree2R(30));
console.log(funcDegree2R(180));
