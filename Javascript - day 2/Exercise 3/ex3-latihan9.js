function myFunction(a) {
  return console.log(a.substring(0, 3));
}

// Test Case
myFunction("abcdefgh"); // Expected 'abcd'
myFunction("1234"); // Expected '12'
myFunction("gedcba"); // Expected 'ged'
