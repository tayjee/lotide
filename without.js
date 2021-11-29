const assertArraysEqual = require('./assertArraysEqual');

const without = function (inputArray, toRemove) {
  let result =inputArray;
  for (let element of toRemove) {
    result = inputArray.filter(item => !toRemove.includes(item))
  }
  return result
}


// TEST
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;