// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
// 10 points
snail = function (array) {
  //if array is empty at the start
  if (array.length === 0 || array[0].length === 0) return [];
  //if array contains only 1 member
  if (array.length === 1 || array[0].length === 1) return [array[0][0]];

  const n = array.length;
  const finalArray = [];
  for (let i = 0; i < n; i++) {
    finalArray.push(array[0].shift());
  }
  for (let i = 1; i < n; i++) {
    finalArray.push(array[i].pop());
  }
  for (let i = n - 2; i >= 0; i--) {
    finalArray.push(array[n - 1].pop());
  }
  for (let i = n - 2; i >= 1; i--) {
    finalArray.push(array[i].shift());
  }
  array.shift();
  array.pop();

  if (array.length === 0) return finalArray;
  if (array[0].length === 1) {
    finalArray.push(array[0][0]);
    return finalArray;
  }
  if (array[0].length > 1)
    snail(array).forEach((item) => finalArray.push(item));

  return finalArray;
};
