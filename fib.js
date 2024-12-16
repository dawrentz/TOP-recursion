//console init
// console.clear();

// //iteration
function fibs(num) {
  let fibArr = [];
  if (num === 0) return fibArr;

  for (let i = 0; i < num; i++) {
    if (i === 0) fibArr.push(0);
    else if (i === 1) fibArr.push(1);
    else fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }

  return fibArr;
}

console.log("fibs");
console.log(fibs(8));

// //recursive
function fibsRec(n) {
  let prevFibArr;
  let nthTerm;

  if (n > 0) {
    prevFibArr = fibsRec(n - 1);
    nthTerm =
      prevFibArr[prevFibArr.length - 1] + prevFibArr[prevFibArr.length - 2];
  }
  if (n === 2) nthTerm = 1;
  if (n === 1) nthTerm = 0;
  if (n === 0) return [];

  //the result is always the previous fib array with the new term added on
  return prevFibArr.concat(nthTerm);
}

console.log("fibsRec");
console.log(fibsRec(8));
