const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  //Calculations to determine which elements are the middle elements
  let middleArray = [];
  let evenMiddleOne = array[(array.length / 2) - 1];
  let evenMiddleTwo = array[(array.length / 2)];
  let oddMiddle = array[Math.round(array.length / 2) - 1];
  //Loop to check to see how many elements are in the array
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(evenMiddleOne);
    middleArray.push(evenMiddleTwo);
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(oddMiddle);
    return middleArray;
  }
};

//Test
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

module.exports = middle;

