function myFunction(a, b) {
  return console.log(a.slice(0, 4));
}

// Test Case
myFunction("abcdefg"); // Expected 'abcd'
myFunction("1234"); // Expected '1'
myFunction("fgedcba"); // Expected 'fged'
