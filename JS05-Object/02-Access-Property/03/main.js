// - ให้เขียนโค้ดเพื่อ log province ของ product1
// - หากมี product2 เป็น object
// ว่าง ให้ log province ของ
// product2 โดยใช้คำสั่งเดียวกับ
// product1
// - (หาก Error ให้หาวิธีแก้)

// ```js
// const product1 = {
//   name: 'Water',
//   distributor: {
//     name: 'Giraffe Water Company',
//     address: {
//       street: 'Phetchaburi',
//       subdistrict: 'Thanonphetchaburi',
//       district: 'Ratchathewi',
//       province: 'Bangkok'
//     }
//   }
// };

// ```

const product1 = {
  name: "Water",
  distributor: {
    name: "Giraffe Water Company",
    address: {
      street: "Phetchaburi",
      subdistrict: "Thanonphetchaburi",
      district: "Ratchathewi",
      province: "Bangkok",
    },
  },
};
const product2 = {};

// let a = {[product1],
// [product2] };

// for (let x in product1) {
//   console.log(product1.distributor.address.province);
// }
// let NoOBJ = true;

// for (let y in product2.address.district) {
//   NoOBJ = false;
// }

// console.log(NoOBJ);

// function Checkprovice(productscheck) {
//       for (let y in productscheck)
//     console.log(productscheck.distributor.address.province);
// }
// Checkprovice(product1);
// Checkprovice(product2);

function obcheck(objname) {
  let thisEmpthy = true;
  for (let k in objname) {
    thisEmpthy = false;
  }
  return thisEmpthy;
}

function Checkprovice(productscheck) {
  if (!obcheck(productscheck)) {
    console.log(
      productscheck.distributor.address.province + "is the province "
    );
  } else console.log("No Its Empty");
}

Checkprovice(product1);
Checkprovice(product2);
