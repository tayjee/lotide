const assertEqual = require('./assertEqual');

const findKey = function(object, callBack) {
  for (key in object) {
    if (callBack(object[key])) {
      const value = key;
      return value;
    }
  }
}


let result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

let result2 = (findKey({
  "Blue Hill": { stars: 2 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0)) // => "undefined"

let result3 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 10 }
}, x => x.stars === 10)) // => "Akelarre"

assertEqual(result1, "noma");
assertEqual(result2, undefined);
assertEqual(result3, "Akelarre");

module.exports = findKey;