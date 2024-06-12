function myFunction(a) {
  const objectNew = {};
  objectNew.key = a;

  console.log(objectNew);
}

// Test Case
myFunction("a"); // Expected {key:'a'}
myFunction("z"); // Expected {key:'z'}
myFunction("b"); // Expected {key:'b'}
