export function circleRadiusFind(radius) {
  let square = (Math.PI * Math.pow(radius, 2)) / 2;
  let dlina = 2 * Math.PI * radius;
  console.log(square, dlina);
  let answerResult = `Длина окружности: ${dlina}, площадь окружности: ${square}`;
  return answerResult;
}
export default circleRadiusFind;
