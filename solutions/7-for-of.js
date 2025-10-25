export default function calculateAverage(array) {
  if (array.length === 0) {
    return null;
  }
  let sum = 0;
  for (const temperature of array) {
    sum += temperature;
  }
  return sum / array.length;
}
