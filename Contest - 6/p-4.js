function gcd(a, b) {
  // TODO: Return the greatest common divisor of a and b
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}
