// BEGIN
export function reverse(arr) {
  const len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
  }
}
// END
