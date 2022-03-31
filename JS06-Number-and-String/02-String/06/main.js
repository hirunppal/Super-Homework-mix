// - จงเขียนฟังก์ชัน extractCurrencyValue(string, rate) ในการแปลงค่า string ที่อยู่ในรูปแบบสกุลเงินดอลลาร์ ให้อยู่ในรูปแบบสกุลเงินบาท
// - rate คือ อัตราในการแปลงดอลลาร์ให้เป็นบาท
// - ตัวอย่าง ผลลัพธ์ของฟังก์ชัน

// ```js
// ```

// extractCurrencyValue("$120", 30); // THB3600

cuUSDTHBSwap = (string, rate) => {
  onlynum = Number(string.slice(1)) * rate;
  output = "THB" + onlynum.toFixed(2);
  return output;
};

console.log(cuUSDTHBSwap("$3000", 33.8));
console.log(cuUSDTHBSwap("$300", 33.8));
console.log(cuUSDTHBSwap("$150", 33.8));
