// 1. Type Assertions

let value: unknown = "Hello Samin";
let length = (value as string).length;

console.log(length);


// 2. Unknown vs Any

// any — skips ALL type checking (should avoid)
let anything: any = 42;
anything = 'Hello';
// anything.foo.bar // no error — dangerous!

// unknown - safe version of any
let something: unknown = 42;
// something.toFixed(); // Error! must check type first

if (typeof something === 'number') {
    something.toFixed(); // safe after check
}


// 3. Type Narrowing

// typeof narrowing
const printValue = (val: string | number) => {
    if (typeof val === 'string') {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val.toFixed(2));
    }
}

// instanceof narrowing
class Cat { meow() { console.log('Meow!'); } }
class Dog { bark() { console.log('Woof!'); } }

const makeSound = (animal: Cat | Dog) => {
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}

const cat = new Cat;
makeSound(cat);

const dog = new Dog;
makeSound(dog);

// 4. Never Type

// never — function that never returns
const throwError = (message: string): never => {
    throw new Error(message);
}

// never in exhaustive switch
type Shape = 'circle' | 'square' | 'triangle';

const getArea = (shape: Shape): number => {
    switch (shape) {
        case 'circle': return 3.14;
        case 'square': return 4;
        case 'triangle': return 3;
        default:
            const check: never = shape; // catches unhandled cases
            return check;
    }
}


// 5. Void Type

// void — function returns nothing
const greet = (name: string): void => {
    console.log(`Hello ${name}`);
}

// difference from never
// void  — function finishes but returns nothing
// never — function never finishes (throws or infinite loop)


// 6. Utility Types

type User = {
    id: number,
    name: string,
    age: number,
    email: string,
}

// Partial - Makes all properties optional
type PartialUser = Partial<User>;
let update: PartialUser = {
    name: 'Samin'
};

console.log(update);

// Required — makes all properties required
type RequiredOnly = Required<User>;
let required: RequiredOnly = {
    id: 1,
    name: 'Samin',
    age: 22,
    email: 'a@b.com',
};

console.log(required);

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;
let roUser: ReadonlyUser = {
    id: 1,
    name: 'Samin',
    age: 22,
    email: 'a@b.com',
};

console.log(roUser);

// Pick — pick only specific properties
type UserPreview = Pick<User, 'id' | 'name'>;
let preview: UserPreview = {
    id: 1,
    name: 'Samin',
};

console.log(preview);

// Omit — remove specific properties
type UserWithoutEmail = Omit<User, 'email'>;
let noEmail: UserWithoutEmail = {
    id: 1,
    name: 'Samin',
    age: 22,
};

console.log(noEmail);

// Record — key-value map
type Roles = Record<string, User>;
let userMap: Roles = {
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
}

console.log(userMap);
console.log(userMap.admin);
console.log(userMap.guest);


// 7. Intersection Types

type BasicInfo = { name: string; age: number; };
type ContactInfo = { email: string; phone: string; };

// & combines both types
type FullProfile = BasicInfo & ContactInfo;

let profile: FullProfile = {
    name: 'Samin',
    age: 22,
    email: 'samin@gmail.com',
    phone: '01700000000'
};


// 8. Non-null Assertion & Optional Chaining

// Optional chaining ?.
type Users = { address?: { city?: string } };
let users : Users = {};

console.log(users.address?.city ?? 'Unknown');

// Non-null assertion !
let input = document.getElementById('name');
console.log(input!.id); 