function myFunction(a, b) {
  return console.log(Boolean(a[b]));
}

// Test Case
myFunction({ a: 1, b: 2, c: 3 }, "b"); // Expected true
myFunction({ x: "a", y: null, z: "c" }, "y"); // Expected false
myFunction({ x: "a", b: "b", z: undefined }, "z"); // Expected false
