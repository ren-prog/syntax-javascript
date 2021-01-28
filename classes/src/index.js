// const EntityBase = require("./entityBase");

// const e = new EntityBase({
//   name: "Erick Wendel",
//   gender: "male",
// });

// console.log(
//   new EntityBase({
//     name: "Erick Wendel",
//     gender: "male",
//   }).name
// );

const assert = require("assert");
const Employee = require("./employee");
const Manager = require("./manager");
const Util = require("./util");

const GENDER = {
  male: "male",
  female: "female",
};
{
  const employee = new Employee({
    name: "XuxaDaSilva",
    gender: GENDER.female,
  });

  assert.throws(() => employee.birthYear, {
    message: "You must define age first",
  });
}

const CURRENT_YEAR = 2021;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
  const employee = new Employee({
    name: "Renan",
    age: 20,
    gender: GENDER.male,
  });
  assert.deepStrictEqual(employee.name, "Mr. Renan");
  assert.deepStrictEqual(employee.age, undefined);
  assert.deepStrictEqual(employee.gender, undefined);
  assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

  const expectBirthYear = 2001;
  assert.deepStrictEqual(employee.birthYear, expectBirthYear);

  // não tem set, não vai mudar o valor de birthYear
  employee.birthYear = new Date().getFullYear - 80;
  assert.deepStrictEqual(employee.birthYear, new Date().getFullYear - 80);

  // Nesse caso, setando a idade, passa no teste
  employee.age = 80;
  assert.deepStrictEqual(employee.birthYear, 1941);

  console.log("\n ---- Employe -----");
  console.log("name", employee.name);
  console.log("age", employee.age);
  console.log("gender", employee.gender);
  console.log("grossPay", employee.grossPay);
  console.log("netPay", employee.netPay);
}

{
  const manager = new Manager({
    name: "Maria",
    age: 18,
    gender: GENDER.female,
  });

  assert.deepStrictEqual(manager.name, "Ms. Maria");
  assert.deepStrictEqual(manager.age, undefined);
  assert.deepStrictEqual(manager.gender, undefined);
  assert.deepStrictEqual(manager.birthYear, 2003);
  assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
  assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

  console.log("\n ---- Manager -----");
  console.log(manager.name);
  console.log(manager.age);
  console.log(manager.gender);
  console.log(manager.birthYear);
  console.log(manager.grossPay);
  console.log(manager.Bonuses);
  console.log(manager.netPay);
}
