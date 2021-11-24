// FUNCTION IMPLEMENTATION
const assertArrayEquals = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) === true ) {
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



// TEST CODE
assertArrayEquals([1, 2, 3], [1, 2, 3]); // => should PASS