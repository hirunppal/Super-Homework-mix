// // ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function
// function isprime(number) {
//   for (let l = 2; l <= number - 1; l++) {
//     if (number % l === 0)
//       // console.log(l);
//       return false;
//   }
//   return true;
// }
// console.log(isprime(40));
// let count = 0;
// for (let i = 2; i <= 100; i++) {
//   if (isprime(i)) {
//     console.log(i);
//     count = count + 1;
//   }
// }

let isprime = () => {
  for (let l = 2; l <= number - 1; l++) {
    if (number % l === 0)
      // console.log(l);
      return false;
  }
  return true;
};

console.log(isprime(40));
