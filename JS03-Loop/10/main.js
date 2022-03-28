// ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100
// let awn = prompt("Even Or Odd");
// if (awn % 2 == 0) {
//   alert("Even");
// } else if (awn === "0") {
//   alert("zero");
// } else {
//   alert("Odd");
// }

// for (var j = 1; j <= 100; j++) {
// if (i = i ) {

// }
// }

function sort_prime(num) {
  var prime_num1 = [],
    prime_num2 = [];

  for (var i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  for (var i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (var j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

console.log(sort_prime(100));

// for (var i = 2; i <= 100; i++){
//   for (var j = 1; i * j <= 100; j++) {
//     if (J % 1 == 0 )
//     else if i %
//   }

//   }

//   return prime_num1;
// }
// for (let i = 1; i <= 100; i += 2) {
//   if (i % 1 == 0) console.log(i);
// }

// let i = 1;
// while (i <= 100) {}

// V2
// let k = 0;
// for (let i = 1; i <= 100; i++) {
//   let flag = 0;

//   // looping through 2 to user input number
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//       break;
//     }
//   }

//   // if number greater than 1 and not divisible by other numbers
//   if (i > 1 && flag == 0) {
//     console.log(i);
//     k = k + 1;
//   }
// }
// console.log("1-100 Primes are = " + k);

function isprime(number) {
  for (let l = 2; l <= number - 1; l++) {
    if (number % l === 0)
      // console.log(l);
      return false;
  }
  return true;
}
console.log(isprime(40));
let count = 0;
for (let i = 2; i <= 100; i++) {
  if (isprime(i)) {
    console.log(i);
    count = count + 1;
  }
}
// console.log("all the prime =" + count);
