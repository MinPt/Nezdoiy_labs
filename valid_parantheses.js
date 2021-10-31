// https://www.codewars.com/kata/52774a314c2333f0a7000688
// 5 points
function validParentheses(parens) {
  const array = [];
  const perensArray = parens.split("");

  let isInvalid = perensArray.some((item) => {
    if (item === "(") {
      array.push(item);
    } else {
      if (array[array.length - 1] !== "(") {
        return true;
      }
      array.pop();
    }
  });
  if (array.length > 0) isInvalid = true;
  return !isInvalid;
}
