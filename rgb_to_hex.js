// https://www.codewars.com/kata/513e08acc600c94f01000001
// 5 pooints
function rgb(r, g, b) {
  const red = converToDoubleDigits(getClosesValue(r));
  const green = converToDoubleDigits(getClosesValue(g));
  const blue = converToDoubleDigits(getClosesValue(b));
  return red + green + blue;
}

function getClosesValue(value) {
  if (value <= 0) return 0;
  if (value >= 255) return 255;
  return value;
}

function converToDoubleDigits(value) {
  if (value <= 16) return "0" + value.toString(16).toUpperCase();
  return value.toString(16).toUpperCase();
}
