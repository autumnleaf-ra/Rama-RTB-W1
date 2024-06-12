function myFunction(arr) {
  let negatives = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatives.push(arr[i]);
    }
  }

  return console.log(negatives.length);
}

// Test Case
myFunction([1, -2, 2, -4]); // Expected 2
myFunction([0, 9, 1]); // Expected 0
myFunction([4, -3, 2, 1, 0]); // Expected 1
