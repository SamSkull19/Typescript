// An interface defines the shape/structure an object must follow.

interface threeSum {
    num1: number,
    num2: number,
    num3: number,
}

function ThreeSum(options : threeSum) {
    return options.num1 + options.num2 + options.num3
}

let threeNumbers = { num1: 2, num2: 3, num3: 4 };
console.log(ThreeSum(threeNumbers));


interface Car {
    brand: string;
    model: string;
    year: number;
    color?: string; // optional
    sunroof?: boolean; // optional
}

let car1 : Car = {
    brand: 'Toyota', 
    model: 'Corolla', 
    year: 2022,
}

console.log(car1);

let car2 : Car = {
    brand: 'BMW', 
    model: 'X5', 
    year: 2024, 
    color: 'Black',
}

console.log(car2);


interface BankAccount {
    readonly accountNumber: number;  // cannot change after creation
    owner: string;
    balance: number;
}

let account: BankAccount = {
    accountNumber: 123456,
    owner: 'Samin',
    balance: 5000
};

account.owner = 'Frank'; 
// account.accountNumber = 999;    // Error! readonly

console.log(account);
console.log(account.accountNumber);
console.log(account.owner);


interface Calculator {
    num1 : number,
    num2 : number,
    add() : number; // return
    subtract() : number;
    multiply() : number;
}

let calc : Calculator = {
    num1: 10,
    num2: 5,
    add() { 
        return this.num1 + this.num2; 
    },
    subtract() { 
        return this.num1 - this.num2; 
    },
    multiply() { 
        return this.num1 * this.num2; 
    },
}

console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());


interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

let myDog: Dog = {
    name: 'Bruno',
    age: 3,
    breed: 'Labrador',
    bark() { 
        console.log('Woof!'); 
    }
};

console.log(myDog);
console.log(myDog.bark());


interface MathOp {
    (a : number, b : number) : number;
}

let add : MathOp = (a, b) => a + b;
let sub : MathOp = (a, b) => a - b;
let mul: MathOp = (a, b) => a * b;

console.log(add(3, 4));
console.log(sub(10, 4));
console.log(mul(3, 4));

