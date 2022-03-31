// - จงเขียนฟังก์ชัน truncate(str, length) เพื่อตัดข้อความ ถ้าหากข้อความมีความยาวมากกว่ากำหนด ให้ตัดความยาวของข้อความให้เท่ากับความยาวที่กำหนดแล้วต่อท้ายด้วย …
// - ถ้าความยาวข้อความสั้นกว่าความยาวที่กำหนดให้ return เป็นข้อความเดิม
// - ตัวอย่าง ผลลัพธ์ของฟังก์ชัน

// ```js
// truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
// truncate("Hi everyone!", 20); // Hi everyone!
// ```

// truncate("What I'd like to tell on this topic is:", 20); // What I'd like to te…
// truncate("Hi everyone!", 20); // Hi everyone!

truncate = (str, nlength) => {
  var j = nlength + 1;
  var nstr = str.slice(0, j);
  if (str.length > nlength) {
    return nstr + "....";
  } else return nstr;
};

console.log(truncate("on this topic", 9));
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("only this", 9));

//test
// j = 10;
// str = "What I'd like to tell on this topic is:";
// var nstr = str.slice(0, j + 1);
// console.log(nstr);
