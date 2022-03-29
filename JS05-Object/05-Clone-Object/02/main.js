// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true

// ```js
// const state1 = { username: 'john', point: 100, loading: true };
// // ```

const state1 = { username: "john", point: 100, loading: true };

const objclonerloop = {};
for (k in state1) {
  objclonerloop[k] = state1[k];
}
key = "success";
state1.point = 75;
state1.loading = false;
state1[key] = "success";
state1.success = true;

console.log(objclonerloop);
