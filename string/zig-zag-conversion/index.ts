function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const stringArray = new Array(numRows).fill("");
  let index = 0;
  let direction = "forward";
  let currentStringIndex = 0;

  while (index < s.length) {
    stringArray[currentStringIndex] += s.charAt(index);
    if (direction === "forward") {
      if (currentStringIndex === numRows - 1) {
        direction = "backward";
        currentStringIndex--;
      } else {
        currentStringIndex++;
      }
    } else {
      if (currentStringIndex === 0) {
        direction = "forward";
        currentStringIndex++;
      } else {
        currentStringIndex--;
      }
    }

    index++;
  }

  return stringArray.join("");
}

const result = convert("PAYPALISHIRING", 4); // expected result 
console.log(result);
