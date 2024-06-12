function myFunction(obj) {
  return console.log(obj.country);
}

// Test Case
myFunction({ continent: "Asia", country: "Japan" }); // Expected 'Japan'
myFunction({ country: "Sweden", continent: "Europe" }); // Expected 'Sweden'
