// https://www.codewars.com/kata/54da5a58ea159efa38000836
// 7 points
function findOdd(A) {
  const odd = {};
  A.forEach((item) => {
    if (odd[item] !== undefined) return delete odd[item];
    odd[item] = item;
  });
  return odd[Object.keys(odd)[0]];
}
