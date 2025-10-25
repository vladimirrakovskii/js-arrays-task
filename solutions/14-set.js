// BEGIN
export default function countUniqChars(str) {
  const uniqueChars = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  }
  
  return uniqueChars.length;
}
// END
