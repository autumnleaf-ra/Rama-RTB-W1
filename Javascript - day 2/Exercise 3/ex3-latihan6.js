function myFunction(a) {
  return console.log(a.slice(-3));
}

// Test Case
myFunction("abcdefg"); // Expected 'efg'
myFunction("1234"); // Expected '234'
myFunction("fgedcba"); // Expected 'cba'
