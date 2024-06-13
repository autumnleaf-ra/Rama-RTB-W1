function emotify(str) {
  let word = str.toLowerCase().substring(8);

  const emote = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };
  return "Make me " + emote[word] || emote["emote not found"];
}

console.log(emotify("Make me smile")); // expected "Make me :D"
console.log(emotify("Make me grin")); // expected "Make me :)"
console.log(emotify("Make me sad")); // expected "Make me :("
console.log(emotify("Make me smile")); // expected "Make me :D"
console.log(emotify("Make me grin")); // expected "Make me :)"
console.log(emotify("Make me sad")); // expected "Make me :("
console.log(emotify("Make me mad")); // expected "Make me :P
