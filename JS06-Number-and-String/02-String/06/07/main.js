// - จงเขียนฟังก์ชัน ..... (a , b) นับว่ามี a ใน b กี่ตัว

aplhaCount = (a, text) => {
  var count = 0;
  var POS = "";
  var x = 0;
  var PosLine = "";
  for (let char of text) {
    if (String(a).toUpperCase() == String(char).toUpperCase()) {
      count = count + 1;

      POS = String(POS) + String(text.indexOf(a));

      // x = Number(POS);
      // var newtext = text.slice(Number(text.indexOf(a), x));
    }
  }
  console.log(POS);
  return count;
};

impTexPOSrenewtex = (char, text) => {
  var poss = String(text.indexOf(a));
};
// let t1 = "What I'd like to tell on this topic is:";
let t1 = "What I'd like to tell on this topic is:";
let a1 = "i";

console.log(aplhaCount(a1, t1));
