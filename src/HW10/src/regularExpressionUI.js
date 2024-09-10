// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1.Датой.
// 2.Адресом электронной почты.
import { regularExpressionFind } from "./regularExpressionFind.js";
export function regularExpressionUI(el) {
  const input = document.createElement("input");
  el.append(input);

  const button = document.createElement("button");
  button.innerHTML = "Проверяем";
  el.append(button);

  const answer = document.createElement("answer");
  answer.innerHTML = `<div>Введите данные</div>`;
  el.append(answer);

  button.addEventListener("click", function () {
    answer.innerHTML = `<div>${regularExpressionFind(input.value)}</div>`;
  });
}
export default regularExpressionUI;
