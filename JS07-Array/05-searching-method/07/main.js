// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// ```
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

// updateTask = (id, newName) => {
//   let target = tasks.indexOf(id);
//   console.log(target);
// };

updateTask = (id, newName) => {
  tasks.find(function (element, index) {
    if (element.id === id) {
      element.name = newName;
      return true;
    }
  });
};

updateTask(2, 2000);
console.log(tasks);
