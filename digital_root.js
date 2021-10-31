// https://www.codewars.com/kata/541c8630095125aba6000c00
// 5 points
function digital_root(n) {
  if (n < 10) {
    return n;
  }
  const newNumber = n
    .toString()
    .split("")
    .map((item) => parseInt(item, 10))
    .reduce((a, b) => a + b);
  return digital_root(newNumber);
}
