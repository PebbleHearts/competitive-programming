function myAtoi(s: string): number {
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = Math.pow(2, 31);

  s = s.trim();
  // 48 - 57
  
  let result = 0;
  let isNegative = false;
  let i = 0
  if (s[i] === '-' || s[i] === '+') {
      if (s[i] === '-') {
          isNegative = true;
      }
      i++;
  }
  for(i; i < s.length; i++) {
      if(!(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57))  {
          break;
      } else {
          result = result * 10 + (+s.charAt(i))
      }

      if(isNegative && result > MIN_INT) {
          result = MIN_INT;
          break;
      } else if (!isNegative && result > MAX_INT) {
          result = MAX_INT;
          break;
      }
  }

  return isNegative ? -result : result;
};