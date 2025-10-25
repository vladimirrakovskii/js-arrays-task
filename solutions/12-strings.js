// BEGIN
export default function makeCensored(text, stopWords) {
  // Разбиваем текст на массив слов/подстрок по пробелам
  const words = text.split(' ');

  // Проходим по каждому слову и проверяем, есть ли оно в списке стоп-слов
  const censoredWords = words.map(word => 
    stopWords.includes(word) ? '$#%!' : word
  );

  // Собираем обратно в строку
  return censoredWords.join(' ');
}
// END
