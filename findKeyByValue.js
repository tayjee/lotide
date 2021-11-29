const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  const arrayKeys = Object.keys(object);
  console.log(arrayKeys);
  for (const key of arrayKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

//TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;