const assertEqual = require('./assertEqual');

const countLetters = function(text) {
const count = {};
for (let i = 0; i < text.length; i++) {
  text = text.replace(/ /g, '');
  count[text.charAt(i)] = text.split(text.charAt(i)).length - 1 
}
return count
}
console.log(countLetters("ABBCCCDDDD EEEEE"));  

module.exports = countLetters;