import People from "./People.js";
import Account from "./Account.js";

export default class Client extends People{

    #account

    constructor(name, age, id, account){
        super(name, age, id)
        this.#account = account
    }

    informationData(){
        return `
        Name: ${this.name}
        Age: ${this.age}
        Id: ${this.id}

        `
    }

    
    aboutAccount(){

        return `Type Account: ${this.#account}`

    }



    get account(){
        return this.#account
    }

    set account(newAccount){
        this.#account = newAccount
    }

}

