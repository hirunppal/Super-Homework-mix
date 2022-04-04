ผลจากการรันคำสั่งในบรรทัด \* คืออะไร

````js
let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // *aleart ["a", "b"];

// arr.push(function() {
//   alert(this);
// })

// ```
````
