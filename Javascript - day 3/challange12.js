function inBox(arr) {
  let insideBox = true;
  const arrayLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const TopBox = arr[0].split("");
    const BottomBox = arr[arrayLength - 1].split("");

    for (let j = 0; j < TopBox.length; j++) {
      if (TopBox[i] === "*") {
        insideBox = false;
      }
    }

    if (arr[1]) {
      const middleBox = arr[i].split("");
      for (let l = 0; l < arrayLength - 1; l++) {
        if (middleBox[i + 1] === "*") {
          insideBox = true;
        }
      }
    }

    for (let k = 0; k < BottomBox.length; k++) {
      if (BottomBox[k] === "*") {
        insideBox = false;
      }
    }
  }

  return insideBox;
}

console.log(inBox(["###", "#*#", "###"])); // Expected true

console.log(inBox(["####", "#* #", "#  #", "####"])); // Expected true

console.log(inBox(["*####", "# #", "#  #*", "####"])); // Expected false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // Expected false

console.log(inBox(["###", "# #", "###"])); // Expected false

console.log(inBox(["####", "#  #", "#  #", "####"])); // Expected false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // Expected false

console.log(inBox(["###", "#*#", "###"])); // Expected true

console.log(inBox(["####", "# *#", "#  #", "####"])); // Expected true

console.log(inBox(["#####", "#  *#", "#   #", "#   #", "#####"])); // Expected true

console.log(inBox(["#####", "#   #", "# * #", "#   #", "#####"])); // Expected true

console.log(inBox(["#####", "#   #", "#   #", "# * #", "#####"])); // Expected true

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"])); // Expected true
