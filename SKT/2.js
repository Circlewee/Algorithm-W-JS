function solution(periods, payments, estimates) {
  var answer = [0, 0];
  const FIRST_VIP_LIMIT = 900000;
  const SECOND_VIP_LIMIT = 600000;

  for (let i = 0; i < periods.length; i++) {
    const period = periods[i];
    const payment = payments[i];
    const estimate = estimates[i];
    const oneYearPayment = payment.reduce((acc, element) => acc + element, 0);
    const estimatePayment = oneYearPayment - payment[0] + estimate;

    if (period >= 23 && period < 59) {
      if (
        (period === 23 || oneYearPayment < FIRST_VIP_LIMIT) &&
        estimatePayment >= FIRST_VIP_LIMIT
      ) {
        answer[0] += 1;
      } else if (oneYearPayment >= FIRST_VIP_LIMIT && estimatePayment < FIRST_VIP_LIMIT) {
        answer[1] += 1;
      }
    } else if (period >= 59) {
      if (
        (period === 59 || oneYearPayment < SECOND_VIP_LIMIT) &&
        estimatePayment >= SECOND_VIP_LIMIT
      ) {
        answer[0] += 1;
      } else if (oneYearPayment >= SECOND_VIP_LIMIT && estimatePayment < SECOND_VIP_LIMIT) {
        answer[1] += 1;
      }
    }
  }

  return answer;
}
