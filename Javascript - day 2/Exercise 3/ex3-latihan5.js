function myFunction(a) {
  return console.log(a.substr(3));
}

// Test Case
myFunction("abcdefg"); // Expected 'defg'
myFunction("1234"); // Expected '4'
myFunction("fgedcba"); // Expected 'dcba'
