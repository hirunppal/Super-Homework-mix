let a = undefined;
let b = null;
let c = b + "4 2";

let d = Number(a);
let e = Number(b);
let f = Number(c);

console.log(d);
console.log(e);
console.log(f);

// a nan ไม่ใช่ number
// b null มีค่า = 0
// c   nan ไม่ใช่ number เป็น str
