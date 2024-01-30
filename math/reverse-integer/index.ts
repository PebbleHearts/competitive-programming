function reverse(x: number): number {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(2, 31);

  let isNegative = x < 0;
  x = Math.abs(x);

  let reversed = 0;

  while(x > 0) {
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
  }

  if (isNegative) reversed = -1 * reversed;
  return (reversed < -INT_MIN || reversed > INT_MAX) ? 0 : reversed;
};