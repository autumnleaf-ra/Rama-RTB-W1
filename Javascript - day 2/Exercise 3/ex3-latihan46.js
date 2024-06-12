function myFunction(obj) {
  return console.log(obj?.a?.b);
}

// Test Case
myFunction({ a: 1 }); // Expected undefined
myFunction({ a: { b: { c: 3 } } }); // Expected {c:3}
myFunction({ b: { a: 1 } }); // Expected undefined
myFunction({ a: { b: 2 } }); // Expected 2
