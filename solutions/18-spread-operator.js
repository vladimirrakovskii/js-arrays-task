// BEGIN
export function flatten(array) {
  const result = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      // Раскрываем массив при помощи spread и добавляем элементы в результат
      result.push(...element);
    } else {
      result.push(element);
    }
  }
  return result;
}
// END
