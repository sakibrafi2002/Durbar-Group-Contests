function repeatedDigitSum(n) {
  let str = String(n);

  while (str.length > 1) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    str = String(sum);
  }

  return Number(str);
}