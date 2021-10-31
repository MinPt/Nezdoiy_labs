// https://www.codewars.com/kata/5e2596a9ad937f002e510435
// 4 points
function infected(s) {
  const total = s.replace(/[X]/gm, "").length;
  const infected = s
    .split("X")
    .reduce((a, island) => (island.includes("1") ? a + island.length : a), 0);
  return total ? (100 * infected) / total : 0;
}
