function myFunction(a) {
  let result = a - Math.floor(a) !== 0;

  if (result) return console.log(false);

  return console.log(true);
}

// Test Case
myFunction(4); // Expected true
myFunction(1.123); // Expected false
myFunction(1048); // Expected true
myFunction(10.48); // Expected false
