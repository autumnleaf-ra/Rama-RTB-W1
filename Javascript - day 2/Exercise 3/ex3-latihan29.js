function myFunction(arr) {
  let arrNew = arr.sort();
  console.log(arrNew.reverse());
}

// Test Case
myFunction([1, 3, 2]); // Expected [3,2,1]
myFunction([4, 2, 3, 1]); // Expected [4,3,2,1]
