const assertArraysEqual = require('./assertArraysEqual');

//Map Function
const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
    results.push(callBack(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length * 2);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [12, 14, 4, 10, 6]);

module.exports = map;