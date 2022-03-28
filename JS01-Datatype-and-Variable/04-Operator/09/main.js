let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);

console.log(a);

// 84 เพราะ
// 1 x '4 ' null go to number +0 + 0 + 0 ==>4   -5 *2 = -6
//    + 9 => st =+0 = 90

// ในวงเล็บ 7+2 +0 + 0+ nan = string 9
