// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // *
// sendTo(null); // **
// ```

// ```js
// const sender = "Matt";

// function sendTo(to, from = "CC") {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo("Max"); // ***
// sendTo("Ben", "Jay"); // ****
// ```

const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // * log = From Sarah to  Matt โดนบรรทัดล่างเขียนทับ
sendTo(null); // ** From from CC to null

// const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** from CC to max
