/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  let isPos = true;
  while (s[0] === ' ') {
    s = s.slice(1);
  }
  if (s[0] === '+') {
    s = s.slice(1);
  } else if (s[0] === '-') {
    isPos = false;
    s = s.slice(1);
  }
  let endIndex = 0;
  while (s[endIndex] && /\d/.test(s[endIndex])) {
    endIndex++;
  }
  s = s.slice(0, endIndex);
  let result = Number(s);
  if (!isPos) {
    result *= -1;
  }
  let min = -2147483648;
  let max = 2147483647;
  if (result < min) {
    result = min;
  } else if (result > max) {
    result = max;
  }
  return result;
};