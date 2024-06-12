function myFunction(a) {
  return console.log(a.splice(-3));
}

// Test Case
myFunction([1, 2, 3, 4]); // Expected [2,3,4]
myFunction([5, 4, 3, 2, 1, 0]); // Expected [2,1,0]
myFunction([99, 1, 1]); // Expected [99,1,1]
