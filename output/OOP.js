class BankAccount {
    constructor(owner, balance, type, accNum) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = type;
        this.accountNumber = accNum;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient balance!');
            return;
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount('Samin', 5000, 'Savings', 123456);
account.deposit(1000);
account.withdraw(2000);
console.log(account.owner);
// console.log(account.balance); // Error! private
console.log(account.accountNumber); // readonly
// account.accountNumber = 999;    // Error! readonly
// Long way
class Cat {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}
// Short way (same result)
class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log(`${this.name} (${this.breed}) says Woof!`);
    }
}
const dog1 = new Dog('Bruno', 'Labrador', 3);
const dog2 = new Dog('Max', 'Poodle', 5);
dog1.bark();
dog2.bark();
export {};
//# sourceMappingURL=OOP.js.map