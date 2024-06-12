function myFunction(a, b) {
  let arrNew = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b) {
      arrNew.push(a[i]);
    }
  }

  return console.log(arrNew);
}

// Test Case
myFunction([1, 2, 3], 2); // Expected [1, 3]
myFunction([1, 2, "2"], "2"); // Expected [1, 2]
myFunction([false, "2", 1], false); // Expected ['2', 1]
myFunction([1, 2, "2", 1], 1); // Expected [2, '2']
