const fiboline = [, ,];
// f1 -2 -1
// let first_fibo = fibo;

// function fiboUntillValue(Max)
// {
//     Maxn_1 =
//     Maxn_2 =
//     for (i = )

// }
let fibo = (maxn) => {
  const fiboline = [0, 1, 1, 2, 3];
  for (i = 2; i < maxn - 2; i++) {
    // =fiboline.splice(fiboline.length, 0, fiboline[i - 1] + fiboline[i - 2]);
    // fiboline[maxn] = fiboline[maxn - 1] + fiboline[maxn - 2];
    fiboline.push(
      fiboline[fiboline.length - 1] + fiboline[fiboline.length - 2]
    );
    // console.log(fiboline.push(fiboline[i - 1] + fiboline[i - 2]));
    console.log(fiboline);
  }
  //   let fibvalue = fiboline[length];
  return fiboline[fiboline.length - 1];
};
console.log("Bro the last Fibo is  " + fibo(10));
// console.log(fibvalue);
//[0,1,1,2]
