function myFunction(a, b) {
  if (a === b) return console.log(true);
  return console.log(false);
}

// Test Case
myFunction(2, 3); // Expected false
myFunction(3, 3); // Expected true
myFunction(1, "1"); // Expected false
myFunction("10", "10"); // Expected true
