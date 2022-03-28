// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// const showModal = alert;
// showModal("Execute modal"); // *
// ```

// ```js
// const showModal = alert();
// showModal("Execute modal"); // **
// ```

const showModal1 = alert;
showModal("Execute modal"); // *

const showModal2 = alert();
showModal("Execute modal"); // ** error
