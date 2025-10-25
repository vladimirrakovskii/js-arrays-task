const _ = require("lodash"); 

// BEGIN
export default function getSameCount(array1, array2) {
  let count = 0;
  const checked = []; // Массив для хранения уже посчитанных совпадений

  for (let i = 0; i < array1.length; i++) {
    const item1 = array1[i];

    // Если уже засчитан такой элемент, пропускаем его
    if (checked.includes(item1)) {
      continue;
    }

    for (let j = 0; j < array2.length; j++) {
      const item2 = array2[j];

      if (item1 === item2) {
        count++;
        checked.push(item1);
        break; // Переходим к следующему элементу из array1
      }
    }
  }

  return count;
}
// END
