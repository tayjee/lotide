// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); */


const countLetters = function(text) {
const count = {};
for (let i = 0; i < text.length; i++) {
  text = text.replace(/ /g, '');
  count[text.charAt(i)] = text.split(text.charAt(i)).length - 1 
}
return count
}
console.log(countLetters("ABBCCCDDDD EEEEE"));