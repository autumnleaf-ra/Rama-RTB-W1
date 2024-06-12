function myFunction(a) {
  return a.slice(0, -3);
}

// Test Case
myFunction("abcdefg"); // Expected 'abcd'
myFunction("1234"); // Expected '1'
myFunction("fgedcba"); // Expected 'fged'
