class CreateUser {
    constructor(id, name, lastname, email, password, addProp) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        Object.assign(this, addProp);
    }
};

class Users {
    constructor() {
        this.customers = [];
        this.employees = [];
    }

    //Customers
    addCustomer(id, name, lastname, email, password, addProp = {}){
        const user = new CreateUser(id, name, lastname, email, password,  addProp);
        this.customers.push(user);
    };

    //Employees
    addEmployee(id, name, lastname, email, password, extraInfo, addProp = {}) {
        const user = new CreateUser(id, name, lastname, email, password, {
            extraInfo,
            ...addProp,
        });
        this.employees.push(user);
    };
};

//Add security measurements for passwords

const users = new Users();

users.addCustomer(1, 'Satoshi', 'Nakamoto', 'satoshin@gmx.com', 'CHANCELLOR ON BRINK OF SECOND BAILOUT FOR BANKS' );

users.addEmployee(1, 'Hal', 'Finney', 'hal@finney.org', 'Running bitcoin')

module.exports.users = users;