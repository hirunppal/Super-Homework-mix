// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

issameWord = (w1, w2) => {
  if (w1.toUpperCase() == w2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
lib = ["Sex", "Porn", "Xxx"];
ifspam = (word) => {
  let i = 0;
  word = prompt("wodrs");
  for (let each of lib) {
    if (issameWord(word, lib[i])) {
      alert("Yeah u spam");
    }
    i++;
  }
};
// console.log(issameWord("Hi", "hi"));
// console.log(issameWord("Hi", "he"));
// console.log(issameWord("Hi", "hI"));
// console.log(issameWord("sEX", "sex"));
console.log(ifspam());
console.log(ifspam());
console.log(ifspam());
console.log(ifspam());
