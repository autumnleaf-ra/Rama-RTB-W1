function myFunction(arr) {
  let sum = arr.reduce((dsum, a) => dsum + a, 0);
  return console.log(sum / arr.length);
}

// Test Case
myFunction([10, 100, 40]); // Expected 50
myFunction([10, 100, 1000]); // Expected 370
myFunction([-50, 0, 50, 200]); // Expected 50
