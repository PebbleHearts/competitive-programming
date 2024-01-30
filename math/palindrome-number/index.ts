function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const stringifiedNumber = x.toString();

  for (let i = 0; i < stringifiedNumber.length; i++) {
      if (i === stringifiedNumber.length - 1 - i) break;
      if (stringifiedNumber[i] !== stringifiedNumber[stringifiedNumber.length - 1 - i]) {
          return false;
      }
  }
  return true;
};