// https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// 5 points
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let height = h;
    let bounces = 1;

    while (window < height) {
      height = height * bounce;
      if (height <= window) break;
      bounces += 2;
    }
    return bounces;
  }

  return -1;
}
