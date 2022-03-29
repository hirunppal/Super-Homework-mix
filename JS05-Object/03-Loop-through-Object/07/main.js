// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

// ```js
// const employees = {
//   john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
//   peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
//   mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
//   sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
// };

// ```
const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

// do {
//     let input1 = prompt("ชื่อสินค้า!");
//     if (input1 == "stop") {
//       break;
//     }
// }while()
const name = prompt("who?");
if (employees[name]) {
  console.log(
    `Name:, ${name} salary:,  ${employees[name].salary},  'address:' , ${employees[name].address.district},  ${employees[name].address.console}  `
  );
}

// console.log(employees.john);
// console.log(employees.john);
