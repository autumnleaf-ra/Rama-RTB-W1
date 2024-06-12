function myFunction(a, b) {
  if (a < b) return console.log(a / b);

  return console.log(a * b);
}

// Test Case
myFunction(10, 100); // Expected 0.1
myFunction(90, 45); // Expected 4050
myFunction(8, 20); // Expected 0.4
myFunction(2, 0.5); // Expected 1
