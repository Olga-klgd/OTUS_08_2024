//создать дубикат объекта user добавить поле role
export function userJohnAdmin(n) {
  let user = {
    name: "John",
    age: n,
  };
  let admin = {};
  for (let key in user) {
    admin[key] = user[key];
  }
  admin.role = "admin";
  let result = admin;
  console.log(result);
  return result;
}
