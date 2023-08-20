import Manager from "./Manager.js";
import Account from "./Account.js";

const auth = true
const newManager = new Manager("Robert", 42, "245796", "Manager", auth)
const newAccount = new Account(725, "OpenAC", 325)

console.log(newManager.informationData())
console.log(newManager.Authorization())
console.log(newAccount.informationAccount())