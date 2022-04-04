// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว
clone = (arr) => {
  clonedarr = arr.slice(0);
  return clonedarr;
};

let ccar = [7, 9, 0, -2];

console.log(clone(ccar));
