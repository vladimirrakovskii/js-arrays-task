// BEGIN
export default function getTotalAmount(wallet, currency) {
  let total = 0;

  for (let i = 0; i < wallet.length; i++) {
    const entry = wallet[i];
    // Проверяем, начинается ли строка с заданной валюты
    if (entry.slice(0, 3) === currency) {
      // Извлекаем сумму из строки
      const amountStr = entry.slice(4); // пропускаем валюту и пробел
      const amount = Number(amountStr);
      total += amount;
    }
  }

  return total;
}
// END
