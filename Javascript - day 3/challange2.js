function numInStr(arr) {
  const conditions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let dat = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < conditions.length; j++) {
      if (arr[i].includes(conditions[j])) {
        dat.push(arr[i]);
        break;
      }
    }
  }

  return dat;
}

console.log(numInStr(["1a", "a", "2b", "b"])); // expected ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])); // expected ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // expected ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])); // expected ["test1"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // expected ['ab10c', 'a10bc']
console.log(numInStr(["1", "a", " ", "b"])); // expected ['1']
console.log(numInStr(["rct", "ABC", "Test", "xYz"])); // expected []
console.log(numInStr(["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"])); // expected ['10xYZ', 'xy2K77', 'Z1K2W0']
console.log(numInStr(["-/>", "10bc", "abc "])); // expected ['10bc']
