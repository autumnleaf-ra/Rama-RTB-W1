function myFunction(a, b) {
  const objectNew = {};
  objectNew[a] = b;

  console.log(objectNew);
}

// Test Case
myFunction("a", "b"); // Expected {a:'b'}
myFunction("z", "x"); // Expected {z:'x'}
myFunction("b", "w"); // Expected {b:'w'}
