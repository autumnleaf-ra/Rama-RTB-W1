function myFunction(a, b) {
  if (a.includes(b)) {
    return console.log(b + a);
  }

  return console.log(a + b);
}

// Test Case
myFunction("cheese", "cake"); // Expected 'cheesecake'
myFunction("lips", "s"); // Expected 'slips'
myFunction("Java", "script"); // Expected 'Javascript'
myFunction(" think, therefore I am", "I"); // Expected 'I think, therefore I am'
