function myFunction(a) {
  let newNumber = String(a);
  let digits = newNumber.split("").map(function (item) {
    return parseInt(item, 10);
  });
  console.log(digits);
}

// Test Case
myFunction(10); // Expected [1,0]
myFunction(931); // Expected [9,3,1]
myFunction(193278); // Expected [1,9,3,2,7,8]
