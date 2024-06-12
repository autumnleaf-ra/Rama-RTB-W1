function myFunction(a) {
  return console.log(a.substring(0, 3));
}

// Test Case
myFunction("abcdefg"); // Expected 'abc'
myFunction("1234"); // Expected '123'
myFunction("fgedcba"); // Expected 'fge'
