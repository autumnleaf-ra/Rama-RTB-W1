function myFunction(arr) {
  let words = 0;
  let char = "";

  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].length;
    if (count > words) {
      words = count;
      char = arr[i];
    }
  }
  return console.log(char);
}

// Test Case
myFunction(["help", "me"]); // Expected 'help'
myFunction(["I", "need", "candy"]); // Expected 'candy'
