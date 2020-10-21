// calculator object
const calculator = {
  plus: function(num1, num2) {
    return num1 + num2;
  },

  minus: function(num1, num2) {
    return num1 - num2;
  },

  multiple: function(num1, num2) {
    return num1 * num2;
  },

  divide: function(num1, num2) {
    return num1 / num2;
  },

  root: function(num1, num2) {
    return num1**num2;
  }
}

// constant variable of calculation result
const plus = calculator.plus(5, 5);
const minus = calculator.minus(32, 24);
const multiple = calculator.multiple(8, 3);
const divide = calculator.divide(6, 2);
const root = calculator.root(3, 9);

// result
console.log(`result . . . plus : ${plus}, minus : ${minus},
  multiple : ${multiple}, divide : ${divide}, root : ${root}`);
