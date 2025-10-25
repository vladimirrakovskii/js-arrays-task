// BEGIN
export default function getSameParity(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  const firstParity = Math.abs(numbers[0]) % 2;
  return numbers.filter(item => Math.abs(item) % 2 === firstParity);
}
// END
