type ID = string | number;
type Age = number;
type Name = string;

let userId: ID = 101;
let userName: Name = "Samin";
let userAge: Age = 22;

console.log(userId);
console.log(userName);
console.log(userAge);

type User = {
    id: number;
    name: string;
    age: number;
    email: string;
};

let user1: User = {
    id: 1,
    name: "Samin",
    age: 22,
    email: "samin@gmail.com"
};

console.log(user1);

type userID = string | number;
type personalInfo = { name: string, age: number };

const myDetails = (id: userID, user: personalInfo) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
}

myDetails(323, { name: 'Fahim', age: 34 });


type Product = {
    id: number;
    name: string;
    price: number;
    discount?: number;
    description?: string;
};

let product1: Product = { id: 1, name: "Laptop", price: 999 };
let product2: Product = { id: 2, name: "Phone", price: 499, discount: 10 };

console.log(product1);
console.log(product2);


type Status = "active" | "inactive" | "banned";
type Direction = "left" | "right" | "up" | "down";
type StringOrNumber = string | number;

let userStatus: Status = "active";
console.log(userStatus);

userStatus = "banned";
console.log(userStatus);

let move: Direction = "left";
console.log(move);


type Address = {
    city: string;
    country: string;
    zip: string;
};

type Student = {
    id: number;
    name: string;
    age: number;
    address: Address;   // nested type
};

let student1: Student = {
    id: 1,
    name: "Samin",
    age: 22,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        zip: "1200"
    }
};

console.log(student1);


type NumberList = number[];
type StringList = string[];
type UserList = User[];

let scores: NumberList = [95, 87, 76, 100];
let names: StringList = ["Samin", "Frank", "Rain"];

let userList : UserList = [
    {
        id: 1,
        name: "Samin",
        age: 22,
        email: "samin@gmail.com"
    },
    {
        id: 2,
        name: "Fahim",
        age: 25,
        email: "fahim@gmail.com"
    },
    {
        id: 3,
        name: "Karim",
        age: 27,
        email: "karim@gmail.com"
    }
];

console.log(scores);
console.log(names);
console.log(userList);
