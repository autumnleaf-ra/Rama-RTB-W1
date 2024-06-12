function myFunction(obj) {
  delete obj.b;
  console.log(obj);
}

// Test Case
myFunction({ a: 1, b: 7, c: 3 }); // Expected { a: 1, c: 3 }
myFunction({ b: 0, a: 7, d: 8 }); // Expected { a: 7, d: 8 }
myFunction({ e: 6, f: 4, b: 5, a: 3 }); // Expected { e: 6, f: 4, a: 3 }
