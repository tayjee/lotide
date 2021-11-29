const assertArraysEqual = require('./assertArraysEqual');


//takeUntil Function
const takeUntil = function(array, callback) {
  let itemHolder = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      itemHolder.push(array[i]);
    } else {
      return itemHolder;
    }
  }
  return itemHolder;
}


//TEST
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;