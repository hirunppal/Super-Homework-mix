// จงหา index ใน tasks ที่มี id เท่ากับ 2

// ```js
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];
// // expexted result: 1

// ```

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

whereisId = (id, arry) => {
  arry.filter(function (element, index) {
    if (element.id === id) {
      console.log("expexted result:" + index);
      console.log("result elment:" + element);
      return true;
    } else {
      return false;
    }
  });
};
whereisId(2, tasks);
// console.log(whereisId(2, tasks));
