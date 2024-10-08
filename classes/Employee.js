class Employee {
#salary;
#isHired;
static #allEmployees = [];

constructor(name, title, salary){
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;
    Employee.#allEmployees.push(this);
}

static getEmployees(){
    return this.#allEmployees;
}

static getTotalPayroll(){
    let total = 0;

    for (let employee of this.#allEmployees){
        total += employee.#salary;
    }

    return total;
}

getSalary(){
    return this.#salary
}

setSalary(amount){
    if (amount >= 0 ){
        this.#salary = amount;
    } else {
        throw new Error('Salary cannot be negative');
    }
}

getStatus(){
    return this.#isHired;
}

setStatus(command){
    switch(command){
        case 'hire':
            this.#isHired = true;
        case 'fire':
            this.#isHired = false;
    }
}


    
}

module.exports = {
    Employee,
}