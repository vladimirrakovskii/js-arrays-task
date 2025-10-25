// BEGIN
export function getMax(array) {
  if (array.length === 0) {
    return null;
  }
  const [first, ...others] = array; // деструктуризация с rest-оператором
  let max = first;
  for (const number of others) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
// END
