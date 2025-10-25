// BEGIN
export function calculateSum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((sum, item) => {
    if (item % 3 === 0) {
      return sum + item;
    }
    return sum;
  }, 0);
}
// END
