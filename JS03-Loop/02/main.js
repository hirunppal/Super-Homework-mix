// โค้ดทั้งสองให้ผลลัพธ์ออกมาเหมือนกันหรือไม่

// ```js
// let i = 0;
// while (++i < 5) alert(i);
// ```

// ```js
// let i = 0;
// while (i++ < 5) alert(i);
// ```

let i = 0;
while (++i < 5) console.log("i=" + i);

let j = 0;
while (j++ < 5) console.log("j=" + j);

//ไม่เหมือนกัน อันแรกจะ แสดงผล aleart a จากการเก็บข้อมูล หลังเพิ่ม จะแสดงผลได้มากที่สุดแค่ 4
// อันที่สองจะ แสดงผลมากที่สุดอยู่ที่ 5
