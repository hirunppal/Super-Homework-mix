// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

do {
  var number = Number(prompt("Give us your secret number"));
} while (
  !(
    0 > number ||
    number < 100 ||
    number == NaN ||
    number == undefined ||
    number == null
  )
);
alert(" We kept the Number.. Now Gues");
console.log(number);

let guess = Number(prompt("Guess the secret "));

let massage =
  guess > number
    ? (message = "Too  Much")
    : guess > number
    ? (message = "Too Loww")
    : (guess = number
        ? (message = "Exaclyyyyy Rightt")
        : (message = "WTH!!??"));
alert(massage);
