// Challenge 4
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//  Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
function xo(str) {
  // you can only write your code here!
  const charX = [];
  const charO = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      charX.push(str.charAt(i));
    } else {
      charO.push(str.charAt(i));
    }
  }

  if (charX.length === charO.length) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES

console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
