function myFunction(arr) {
  return console.log(arr.reduce((dsum, a) => dsum + a, 0));
}

// Test Case
myFunction([10, 100, 40]); // Expected 150
myFunction([10, 100, 1000, 1]); // Expected 1111
myFunction([-50, 0, 50, 200]); // Expected 200
