// .Напишите функцию isWord, которая принимает на
// вход текстовую строку. Функция возвращает true, если
// строка состоит из одного слова и false, если из
// нескольких.
export function isWord(str) {
  let probel = str.indexOf(" ");
  let result = probel < 0 ? true : false;
  console.log(result);
  return result;
}
