function myFunction(a, b) {
  const newObject = {};
  a.forEach((key, i) => (newObject[key] = b[i]));
  console.log(newObject);
}

// Test Case
myFunction(["a", "b", "c"], [1, 2, 3]); // Expected {a:1,b:2,c:3}
myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]); // Expected {w:10,x:9,y:5,z:2}
myFunction([1, "b"], ["a", 2]); // Expected {1:'a',b:2}
