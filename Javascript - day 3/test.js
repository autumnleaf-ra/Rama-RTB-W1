let str = "Java Script Object Notation";
let acronym = str
  .split(/\s/)
  .reduce((response, word) => (response += word.slice(0)), "");

console.log(acronym);
