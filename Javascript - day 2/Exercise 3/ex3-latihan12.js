function myFunction(a, b, c, d, e, f) {
  let power = (a + b - c) * (d / e);
  return console.log(Math.pow(power, f));
}

// Test Case
myFunction(6, 5, 4, 3, 2, 1); // Expected 10.5
myFunction(6, 2, 1, 4, 2, 3); // Expected 2744
myFunction(2, 3, 6, 4, 2, 3); // Expected -8
