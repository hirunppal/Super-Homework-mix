// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020
let day = 0;
longlive = (birthyear) => {
  for (let i = birthyear; i <= 2020; i++) {
    if (leapyearcheck(birthyear)) {
      day = day + 366;
    } else day = day + 365;
  }
  return day;
};

leapyearcheck = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
};

console.log(longlive(2018));
