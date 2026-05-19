class BankAccount {
    public owner: string;
    private balance: number;
    protected accountType: string;
    readonly accountNumber: number;

    constructor(owner: string, balance: number, type: string, accNum: number) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = type;
        this.accountNumber = accNum;
    }


    deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number) {
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
    public name: string;
    private breed: string;
    readonly age: number;

    constructor(name: string, breed: string, age: number) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}

// Short way (same result)
class Dog {
    constructor(
        public name: string,
        private breed: string,
        readonly age: number,
    ) {}

    bark() {
        console.log(`${this.name} (${this.breed}) says Woof!`);
    }
}

const dog1 = new Dog('Bruno', 'Labrador', 3);
const dog2 = new Dog('Max', 'Poodle', 5);

dog1.bark();
dog2.bark();