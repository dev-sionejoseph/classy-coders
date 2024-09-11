const { Employee } = require("./Employee");

class SalesPerson extends Employee {
    #totalSales;

    constructor(name, title, salary, clients){
        super(name, title, salary);
        this.#totalSales = 0;
        this.clients = clients;
    }

    getSalesNumber(){
        return this.#totalSales;
    }

    makeSale(amount){
        this.#totalSales += amount;
    }


    
}

module.exports = {
    SalesPerson,
}