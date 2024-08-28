//создать объект user с полем name и добавить поле age
export function userJohn() {
  let user = {
    name: "John",
  };
  let age = +prompt("Введите возраст", "");
  age = 5;
  user.age = age;
  let result = user;
  console.log(result);
  return result;
}
