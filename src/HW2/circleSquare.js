// Поместится ли круг в квадрат с заданными площадями
export function circleSquare(circle, square) {
  let diametr = 2 * (Math.sqrt(circle) / Math.PI);
  let side = Math.sqrt(square);
  let result = diametr < side ? "Поместится" : "Не поместится";
  console.log(result);
  return result;
}
