export default class People{

    constructor(name, age, id){
        this.name = name
        this.age = age
        this.id = id
    }

    informationData(){

        return `
        Name: ${this.name}
        Age: ${this.age}
        Id: ${this.id}
        `

    }

}