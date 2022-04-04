// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

// ```js
// console.log([1, 2, 3].includes(2)); // *
// console.log([1, 2, 3].includes(4)); // **
// console.log([1, 2, 3].includes(3, 3)); // ***
// console.log([1, 2, 3].includes(3, -1)); // ****
// console.log([1, 2, NaN].includes(NaN)); // *****
// console.log(['1', '2', '3'].includes(3)); // ******

// ```
console.log([1, 2, 3].includes(2)); // * True
console.log([1, 2, 3].includes(4)); // ** False
console.log([1, 2, 3].includes(3, 3)); // *** False
console.log([1, 2, 3].includes(3, -1)); // **** True
console.log([1, 2, NaN].includes(NaN)); // ***** Ture
console.log(["1", "2", "3"].includes(3)); // ****** False
