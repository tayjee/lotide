const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  array = array.slice(1);
  return array;
};

module.exports = tail;