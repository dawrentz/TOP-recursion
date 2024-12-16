const rawArr1 = [3, 2, 1, 13, 8, 5, 0, 1]; // [0, 1, 1, 2, 3, 5, 8, 13]
const rawArr2 = [105, 79, 100, 110]; // [79, 100, 105, 110]
const testArr = [4, 2, 3, 1];

console.log(mergeSort(rawArr1));
console.log(mergeSort(rawArr2));
console.log(mergeSort(testArr));

function mergeSort(arr) {
  //base cases:
  // - if empty input arr, return empty array
  // - if array is length one, return that array (its already sorted)
  if (arr.length <= 1) return arr;

  //split array in half:
  // - first need lengths for split
  // - round length down so that left array takes the smaller group (if odd length)
  const leftArrLength = Math.floor(arr.length / 2);
  const rightArrLength = arr.length - leftArrLength;

  const leftArr = arr.slice(0, leftArrLength);
  const rightArr = arr.slice(leftArrLength, leftArrLength + rightArrLength);

  //recursive split down each half to array.length = 1, returns itself, then continues with sort
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  //mergeSort does two things: splits the arrays and then the acutal sorting
  //so we need a recursive function inside of a recursive function, like that one movie...
  //basic idea here is to recursively compare the first values of both arrays.
  function sorter(arr1, arr2) {
    //base case: if both array.lenght = 0, you're done
    if (!arr1.length && !arr2.length) return [];
    //if second array is done, return first value of first array (as an array)
    //if first value of first array is less that first value of second array, return first value of first array as an array ([arr1.shift()])
    //shift first array and call recursive function, concat result
    if ((arr1.length && !arr2.length) || arr1[0] <= arr2[0]) {
      return [arr1.shift()].concat(sorter(arr1, arr2));
    }
    //if first array is done, return first value of second array (as an array)
    //if first value of second array is less that first value of first array, return first value of second array as an array ([arr2.shift()])
    //shift second array and call recursive function, concat result
    if ((!arr1.length && arr2.length) || arr1[0] > arr2[0]) {
      return [arr2.shift()].concat(sorter(arr1, arr2));
    }
  }

  const sortedArray = sorter(sortedLeftArr, sortedRightArr);

  return sortedArray;
}
