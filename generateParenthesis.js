/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const result = [];
  var addParens = function(currentCombo, parensOpen, parensClosed) {
    if (parensOpen - parensClosed < 0) {
      return;
    }
    if (currentCombo.length === n * 2) {
      result.push(currentCombo);
      return;
    }
    if (parensOpen < n) {
      addParens(currentCombo + '(', parensOpen + 1, parensClosed);
    }
    if (parensClosed < n) {
      addParens(currentCombo + ')', parensOpen, parensClosed + 1);
    }
  }
  addParens('(', 1, 0);
  return result;
};


// TESTS
// const actualValue = generateParenthesis(3);
// const expectedValue = 5;
// console.log(`Expect ${actualValue.length} to be ${expectedValue}`);

// const actualValue2 = generateParenthesis(8);
// const expectedValue2 = 1430;
// console.log(`Expect ${actualValue2.length} to be ${expectedValue2}`);

