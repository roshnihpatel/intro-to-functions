/*
function:
=========
name: longestInList

parameters:
	- WORDS: list of strings

return type: string
*/ function longestInList(arrayOfStrings) {
  let longest = arrayOfStrings[0];
  for (let word of arrayOfStrings) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

//test cases

console.log(
  'longestInList(["England", "Wales", "Scotland", "Northern Ireland""]):',
  longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),
  "expected Northern Ireland"
);
console.log(
  'longestInList(["the", "quick", "brown", "fox"]):',
  longestInList(["the", "quick", "brown", "fox"]),
  "expected: quick"
);
console.log(
  'longestInList(["hello", "hi", "greetings", "hey"]):',
  longestInList(["hello", "hi", "greetings", "hey"]),
  "expected: greetings"
);
console.log(
  'longestInList(["air nomads", "fire nation", "water tribe", "earth kingdom"]):',
  longestInList(["air nomads", "fire nation", "water tribe", "earth kingdom"]),
  "expected: earth kingdom"
);
