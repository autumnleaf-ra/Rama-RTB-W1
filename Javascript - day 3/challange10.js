function isSpecialArray(params) {
  function evencheck(num) {
    return num % 2 === 0;
  }

  let checkLast = [];

  for (let i = 0; i < params.length; i++) {
    if (evencheck(i) && evencheck(params[i])) {
      checkLast.push("even");
      //   console.log("even", i);
    }

    if (!evencheck(i) && !evencheck(params[i])) {
      checkLast.push("odd");
      //   console.log("odd", i);
    }
  }

  for (let j = 0; j < checkLast.length - 1; j++) {
    if (checkLast[j].includes(checkLast[j + 1])) {
      return false;
    }
  }

  return true;
}

// Example
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // Expected true, Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // Expected false, Index 2 has an odd number 9.
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // Expected false, Index 3 has an even number 8.
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // Expected true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // Expected false
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // Expected false
console.log(isSpecialArray([1, 1, 1, 2])); // Expected false
console.log(isSpecialArray([2, 2, 2, 2])); // Expected false
console.log(isSpecialArray([2, 1, 2, 1])); // Expected true
console.log(isSpecialArray([4, 5, 6, 7])); // Expected true
console.log(isSpecialArray([4, 5, 6, 7, 0, 5])); // Expected true
