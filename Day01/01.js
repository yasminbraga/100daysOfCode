function digPow(n, p) {
  const array = n.toString().split("");

  let pot = p;
  let sum = 0;

  for (let item of array) {
    let raised = item ** pot;
    sum = sum + raised;
    pot++;
  }
  return sum % n == 0 ? sum / n : -1;
}
