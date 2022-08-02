"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  let array = Array.from(num);
  let cont = array.length - 1;

  array.forEach((element) => {
    sum += Math.pow(2, cont) * element;
    cont -= 1;
  });
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  return resDivByTwo(num).split("").reverse().join("");

  function resDivByTwo(numToDivide) {
    if (numToDivide == 1) {
      return String(numToDivide % 2);
    }

    return String(numToDivide % 2) + resDivByTwo(Math.floor(numToDivide / 2));
  }
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
