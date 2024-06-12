function myFunction(a) {
  if (a % 2) return console.log(false);

  return console.log(true);
}

// Test Case
myFunction(10); // Expected true
myFunction(-4); // Expected true
myFunction(5); // Expected false
myFunction(-111); // Expected false
