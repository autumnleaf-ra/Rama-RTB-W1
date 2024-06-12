function myFunction(a, n) {
  return console.log(a.splice(a.length - n, n));
}

// Test Case
myFunction([1, 2, 3, 4, 5], 2); // Expected [ 4, 5 ]
myFunction([1, 2, 3], 6); // Expected [ 1, 2, 3 ]
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3); // Expected [ 6, 7, 8 ]
