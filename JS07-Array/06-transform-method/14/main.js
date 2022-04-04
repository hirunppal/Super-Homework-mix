// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

// ```js
// const products = [
//   { id: 1, name: 'Crystal' },
//   { id: 4, name: 'Namthip' },
//   { id: 5, name: 'Nestle' }
// ];
// // { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

// ```

const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
function constrc(Namu) {
  this.name = Namu;
}
let n = new constrc("bro");
console.log(n);
let p = [];

products.map(function (el) {
  return (p[el.id] = new constrc(el.name));
  //   return (p[el.id] = `name: ${el.name}`);
});
console.log(p);
console.log(p[1]);
