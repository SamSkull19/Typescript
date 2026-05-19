// 1. Type Assertions
var _a, _b;
let value = "Hello Samin";
let length = value.length;
console.log(length);
// 2. Unknown vs Any
// any — skips ALL type checking (should avoid)
let anything = 42;
anything = 'Hello';
// anything.foo.bar // no error — dangerous!
// unknown - safe version of any
let something = 42;
// something.toFixed(); // Error! must check type first
if (typeof something === 'number') {
    something.toFixed(); // safe after check
}
// 3. Type Narrowing
// typeof narrowing
const printValue = (val) => {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val.toFixed(2));
    }
};
// instanceof narrowing
class Cat {
    meow() { console.log('Meow!'); }
}
class Dog {
    bark() { console.log('Woof!'); }
}
const makeSound = (animal) => {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
};
const cat = new Cat;
makeSound(cat);
const dog = new Dog;
makeSound(dog);
// 4. Never Type
// never — function that never returns
const throwError = (message) => {
    throw new Error(message);
};
const getArea = (shape) => {
    switch (shape) {
        case 'circle': return 3.14;
        case 'square': return 4;
        case 'triangle': return 3;
        default:
            const check = shape; // catches unhandled cases
            return check;
    }
};
// 5. Void Type
// void — function returns nothing
const greet = (name) => {
    console.log(`Hello ${name}`);
};
let update = {
    name: 'Samin'
};
console.log(update);
let required = {
    id: 1,
    name: 'Samin',
    age: 22,
    email: 'a@b.com',
};
console.log(required);
let roUser = {
    id: 1,
    name: 'Samin',
    age: 22,
    email: 'a@b.com',
};
console.log(roUser);
let preview = {
    id: 1,
    name: 'Samin',
};
console.log(preview);
let noEmail = {
    id: 1,
    name: 'Samin',
    age: 22,
};
console.log(noEmail);
let userMap = {
    admin: {
        id: 1,
        name: 'Samin',
        age: 22,
        email: 'a@b.com',
    },
    guest: {
        id: 2,
        name: 'Frank',
        age: 30,
        email: 'b@c.com'
    },
};
console.log(userMap);
console.log(userMap.admin);
console.log(userMap.guest);
let profile = {
    name: 'Samin',
    age: 22,
    email: 'samin@gmail.com',
    phone: '01700000000'
};
let users = {};
console.log((_b = (_a = users.address) === null || _a === void 0 ? void 0 : _a.city) !== null && _b !== void 0 ? _b : 'Unknown');
// Non-null assertion !
let input = document.getElementById('name');
console.log(input.id);
export {};
//# sourceMappingURL=SomeConcepts.js.map