// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

// ```js

// ```
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

DeleteTask = (id) => {
  let taskfitered = tasks.filter(function (element, index) {
    if (element.id !== id) {
      return true;
    } else {
      return false;
    }
  });
  return taskfitered;
};

// updateTask(2, 2000);
DeleteTask(1);

// console.log(taskfitered);

console.log(DeleteTask(1));
