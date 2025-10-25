// BEGIN
export default function getSuperSeriesWinner(scores) {
  let canadaWins = 0;
  let ussrWins = 0;

  for (let i = 0; i < scores.length; i++) {
    const [canadaScore, ussrScore] = scores[i];
    if (canadaScore > ussrScore) {
      canadaWins++;
    } else if (ussrScore > canadaScore) {
      ussrWins++;
    }
    // ничьи не учитываем, не прибавляем побед
  }

  if (canadaWins > ussrWins) {
    return 'canada';
  } else if (ussrWins > canadaWins) {
    return 'ussr';
  } else {
    return null; // ничья
  }
}
// END
