function makeTitle(str) {
  let word = str
    .split(/\s/)
    .reduce(
      (res, words) =>
        (res += words.slice(0, 1).toUpperCase() + words.slice(1) + " "),
      " "
    );

  return word;
}

// Example
console.log(makeTitle("This is a title")); // Expected "This Is A Title"
console.log(makeTitle("capitalize every word")); // Expected "Capitalize Every Word"
console.log(makeTitle("I Like Pizza")); // Expected "I Like Pizza"
console.log(makeTitle("PIZZA PIZZA PIZZA")); // Expected "PIZZA PIZZA PIZZA"
console.log(makeTitle("I am a title")); // Expected "I Am A Title"
console.log(makeTitle("I AM A TITLE")); // Expected "I AM A TITLE"
console.log(makeTitle("i aM a tITLE")); // Expected "I AM A TITLE"
console.log(makeTitle("the first letter of every word is capitalized")); // Expected "The First Letter Of Every Word Is Capitalized"
console.log(makeTitle("I Like Pizza")); // Expected "I Like Pizza"
console.log(makeTitle("Don't count your ChiCKens BeFore They HatCh")); // Expected "Don't Count Your ChiCKens BeFore They HatCh"
console.log(makeTitle("All generalizations are false, including this one")); // Expected "All Generalizations Are False, Including This One"
console.log(
  makeTitle("Me and my wife lived happily for twenty years and then we met.")
); // Expected "Me And My Wife Lived Happily For Twenty Years And Then We Met."
console.log(makeTitle("There are no stupid questions, just stupid people.")); // Expected "There Are No Stupid Questions, Just Stupid People."
console.log(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d")); // Expected "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d"
