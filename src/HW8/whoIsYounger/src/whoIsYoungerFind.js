export function whoIsYoungerFind(userFirst, userSecond) {
  let answer;
  let dateTransferUserFirst = userFirst.split("-");
  let newDateUserFirst = new Date(
    dateTransferUserFirst[0],
    dateTransferUserFirst[1] - 1,
    dateTransferUserFirst[2],
  );
  let dateTransferUserSecond = userSecond.split("-");
  let newDateUserSecond = new Date(
    dateTransferUserSecond[0],
    dateTransferUserSecond[1] - 1,
    dateTransferUserSecond[2],
  );
  let checkDate = newDateUserFirst.getTime() - newDateUserSecond.getTime();
  switch (true) {
    case checkDate < 0:
      answer = "первый старше";
      break;

    case checkDate > 0:
      answer = "второй старше";
      break;

    default:
      answer = "они ровесники";
  }
  return answer;
}
export default whoIsYoungerFind;
