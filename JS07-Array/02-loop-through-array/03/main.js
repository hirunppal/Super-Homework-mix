// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// ```js
const summary = {};
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];
// ```
const sumarray = [];
const x = sales.forEach((element) => {
  if (
    !(
      element.discount == null ||
      element.discount == undefined ||
      element.discount == 0
    )
  ) {
    let net = element.price * (1 - element.discount);
    summary.netPrice = net;
  } else summary.netPrice = element.price;

  console.log(element);
  sumarray.push(summary.netPrice);
  console.log(summary);
});
console.log(sumarray);
