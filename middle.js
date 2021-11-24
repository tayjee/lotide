// FUNCTION IMPLEMENTATION
const assertArrayEquals = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

//Equal Array Function
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

