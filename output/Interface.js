// An interface defines the shape/structure an object must follow.
function ThreeSum(options) {
    return options.num1 + options.num2 + options.num3;
}
let threeNumbers = { num1: 2, num2: 3, num3: 4 };
console.log(ThreeSum(threeNumbers));
let car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
};
console.log(car1);
let car2 = {
    brand: 'BMW',
    model: 'X5',
    year: 2024,
    color: 'Black',
};
console.log(car2);
let account = {
    accountNumber: 123456,
    owner: 'Samin',
    balance: 5000
};
account.owner = 'Frank';
// account.accountNumber = 999;    // Error! readonly
console.log(account);
console.log(account.accountNumber);
console.log(account.owner);
let calc = {
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
};
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
let myDog = {
    name: 'Bruno',
    age: 3,
    breed: 'Labrador',
    bark() {
        console.log('Woof!');
    }
};
console.log(myDog);
console.log(myDog.bark());
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
console.log(add(3, 4));
console.log(sub(10, 4));
console.log(mul(3, 4));
export {};
//# sourceMappingURL=Interface.js.map