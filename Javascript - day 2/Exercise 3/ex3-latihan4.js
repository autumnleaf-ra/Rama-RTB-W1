function myFunction(a, n) {
  let charData = a.charAt(n - 1);

  console.log(charData);
}

// Test Case
myFunction("abcd", 1); // Expected 'a'
myFunction("zyxbwpl", 5); // Expected 'w'
myFunction("gfedcba", 3); // Expected 'e'
