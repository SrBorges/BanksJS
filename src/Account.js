import Client from "./Client.js"
export default class Account{

    constructor(numberAccount, typeAccount, balance){
        this.numberAccount = numberAccount
        this.typeAccount = typeAccount
        this.balance = balance
    }

    informationAccount(){

        return `
        Hello Dear Client, Welcome in your Bank.
        Number Account: ${this.numberAccount}
        Type Account: ${this.typeAccount}
        Your Balance is: ${this.balance}
        `

    }


    




}