const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee {
    #programmingLanguages;

    constructor(name, title, salary, programmingLanguages){
        super(name, title, salary);
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language){
        this.#programmingLanguages.push(language);
    }



    
}

module.exports = {
    SoftwareEngineer,
}