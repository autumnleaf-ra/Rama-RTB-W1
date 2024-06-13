function balanced(str) {
  if (typeof str !== "string") return "not a alphabet";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const splitAlphabet = alphabet.split("");
  let word = str.toLowerCase();
  let leftWord = word.slice(0, word.length / 2);
  let rightWord = word.slice(Math.round(word.length / 2), word.length);

  const leftWordIteration = findIteration(leftWord, splitAlphabet);
  const rightWordIteration = findIteration(rightWord, splitAlphabet);

  const reduceIteration = leftWordIteration.reduce((a, b) => a + b);
  const reduceIterationRight = rightWordIteration.reduce((a, b) => a + b);

  if (reduceIteration === reduceIterationRight) return true;
  return false;
}

function findIteration(wordAlphabet, arrAlphabet) {
  let arrNumber = [];

  for (let i = 0; i < wordAlphabet.length; i++) {
    for (let j = 0; j < arrAlphabet.length; j++) {
      if (wordAlphabet[i] === arrAlphabet[j]) {
        arrNumber.push(j + 1);
      }
    }
  }

  return arrNumber;
}

// Example
console.log(balanced("zips")); // expected true, "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
console.log(balanced("brake")); // expected false, "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
console.log(balanced("at")); // expected false
console.log(balanced("forgetful")); // expected false
console.log(balanced("vegetation")); // expected true
console.log(balanced("disillusioned")); // expected false
console.log(balanced("abstract")); // expected true
console.log(balanced("clever")); // expected false
console.log(balanced("conditionalities")); // expected true
console.log(balanced("seasoning")); // expected true
console.log(balanced("uptight")); // expected false
console.log(balanced("ticket")); // expected false
console.log(balanced("calculate")); // expected false
console.log(balanced("measure")); // expected false
console.log(balanced("join")); // expected false
console.log(balanced("anesthesiologies")); // expected true
console.log(balanced("command")); // expected false
console.log(balanced("graphite")); // expected true
console.log(balanced("quadratically")); // expected true
console.log(balanced("right")); // expected false
console.log(balanced("fossil")); // expected true
console.log(balanced("sparkling")); // expected false
console.log(balanced("dolphin")); // expected true
console.log(balanced("baseball")); // expected true
console.log(balanced("immense")); // expected false
console.log(balanced("pattern")); // expected true
console.log(balanced("hand")); // expected false
console.log(balanced("radar")); // expected true
console.log(balanced("oven")); // expected false
console.log(balanced("immutability")); // expected true
console.log(balanced("kayak")); // expected true
console.log(balanced("bartender")); // expected true
console.log(balanced("weight")); // expected false
console.log(balanced("lightbulbs")); // expected true
console.log(balanced("tail")); // expected true
