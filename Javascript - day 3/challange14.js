function number_pairs(str) {
  const newStr = str.split(" ");
  let numberArray = newStr.reduce((acc, x) => acc.concat(+x), []);
  let doubleArr = [];

  for (let i = 0; i < numberArray.length; i++) {
    // if (numberArray[i].some(numberArray)) {
    //   console.log(numberArray);
    // }
    // doubleArr.push(newStr[i]);
    // if (doubleArr[0] === newStr[i + 1]) {
    //   doubleArr.push(newStr[i]);
    // } else {
    //   doubleArr.pop();
    // }
  }

  return doubleArr;
}

// Example
console.log(number_pairs("7 1 2 1 2 1 3 2")); // Expected 2 -> (1, 1), (2, 2)
// number_pairs("9 10 20 20 10 10 30 50 10 20") // Expected 3 -> (10, 10), (20, 20), (10, 10)
// number_pairs("4 2 3 4 1") // Expected 0 -> Although two 4's are present, the first one is discounted.
