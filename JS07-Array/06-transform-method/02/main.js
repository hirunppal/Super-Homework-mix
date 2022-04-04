// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
dash2Camel = (str) => {
  let splited = str.split("-");
  secondBig(splited);
  let New = secondBig(splited).join("");
  return New;
};
secondBig = (SpeD) => {
  let spbro = SpeD.map(function (element, index) {
    if (index === 1) {
      var z = SpeD[0][2];
      var x = z.toUpperCase();
      let one = SpeD[1].split("");
      one.shift();
      one.unshift(x);
      let b = one.join("");
      //   console.log(b);

      return b;
    } else return element;
  });
  //   console.log(spbro);
  return spbro;
  //   console.log(x);
};
console.log(dash2Camel("background-color"));
/////
