import People from "./People.js";
import Client from "./Client.js";
import Account from "./Account.js";
export default class Manager extends People{

    #codeAccess

    constructor(name, age, id, role, codeAccess){
        super(name, age, id)
        this.role = role
        this.#codeAccess = codeAccess
    }

    informationData(){

        return `
        Name: ${this.name}
        Age: ${this.age}
        Id: ${this.id}
        Role: ${this.role}
        `
    }

    Authorization(code){

        if(this.#codeAccess == true){
            const newClient = new Client("Juan", 33, "457868")
            return `
            Hello  Manager ${this.name}.
            Code: ${this.#codeAccess}
            Access Permited.....
            Information Client: ${newClient.informationData()}
            `
        }else if(this.#codeAccess == false ){

            return `
            Access Denied
            `

        }

    }

    get codeAccess(){
        return this.#codeAccess

    }

    set codeAccess(newCode){
        this.#codeAccess = newCode
    }


}