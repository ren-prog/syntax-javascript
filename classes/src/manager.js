const Employee = require("./employee");
const Util = require("./util");

class Manager extends Employee {
  #bonuses = 2000;

  get Bonuses() {
    return Util.formatCurrency(this.#bonuses);
  }

  get netPay() {
    const finalValue =
      Util.unFormatCurrency(super.netPay) + Util.unFormatCurrency(this.Bonuses);
    return Util.formatCurrency(finalValue);
  }
}

module.exports = Manager;
