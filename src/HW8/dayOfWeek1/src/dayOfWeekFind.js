export function dayOfWeekFind(date) {
  let dayOfWeeks = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  let dateTransfer = date.split("-");
  let newDate = new Date(dateTransfer[0], dateTransfer[1] - 1, dateTransfer[2]);
  let dayCount = newDate.getDay();
  let answerResult = dayOfWeeks[dayCount];
  return answerResult;
}
