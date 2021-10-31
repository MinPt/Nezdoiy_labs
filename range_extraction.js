// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
// 10 points
function solution(list) {
  let [start, prev, str, streak] = [list[0], list[0], "", 0];
  for (let i = 1; i < list.length; i++) {
    if (prev + 1 !== list[i]) {
      if (streak > 1) {
        if (str.length !== 0) str += ",";
        str += `${start}-${prev}`;
        streak = 0;
      } else if (streak === 1) {
        if (str.length !== 0) str += ",";
        str += `${start},${prev}`;
        streak = 0;
      } else {
        if (str.length !== 0) str += ",";
        str += prev;
      }
      if (i === list.length - 1) str += `,${list[i]}`;
      start = list[i];
      prev = list[i];
    } else {
      streak++;
      prev = list[i];
      if (i === list.length - 1) {
        if (streak >= 2) {
          str += `,${start}-${list[i]}`;
        } else {
          str += `,${start},${list[i]}`;
        }
      }
    }
  }

  return str;
}
