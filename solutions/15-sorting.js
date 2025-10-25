// BEGIN
export default function bubbleSort(arr) {
  const array = [...arr]; // создаем копию массива для сортировки
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // меняем местами
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}
// END
