// // - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// // - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// // - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array
// let input = prompt("your input");
// while (!(input === null || input === undefined || input === " ")) {
//   input = prompt("your input");
//   buc[buc.length] = input;
// }

// console.log(buc);
// console.log(buc);

// do {}

// buc[buc.length] = "uiop";
// console.log(buc);
//function inputcheck
let buc = [];
inpCheck = () => {
  do {
    let input = prompt("Ip plz");
    if (
      !(
        input == 0 ||
        input == null ||
        input == undefined ||
        input.trim() === ""
      )
    ) {
      buc[buc.length] = input;
    } else {
      break;
    }
  } while (1);
  console.log(buc);
};

//   for (let index of buc) { if (Number(buc[index])!== NaN)
//     sumbuc += buc[index];

// } while (1);
sumit = () => {
  let sumbuc = 0;
  const result = buc.forEach((element) => {
    sumbuc += Number(element);
    console.log(element);
  });
  console.log("Finall Sum =" + sumbuc);
};

sumit(inpCheck());
