let userId = 101;
let userName = "Samin";
let userAge = 22;
console.log(userId);
console.log(userName);
console.log(userAge);
let user1 = {
    id: 1,
    name: "Samin",
    age: 22,
    email: "samin@gmail.com"
};
console.log(user1);
const myDetails = (id, user) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
};
myDetails(323, { name: 'Fahim', age: 34 });
let product1 = { id: 1, name: "Laptop", price: 999 };
let product2 = { id: 2, name: "Phone", price: 499, discount: 10 };
console.log(product1);
console.log(product2);
let userStatus = "active";
console.log(userStatus);
userStatus = "banned";
console.log(userStatus);
let move = "left";
console.log(move);
let student1 = {
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
let scores = [95, 87, 76, 100];
let names = ["Samin", "Frank", "Rain"];
let userList = [
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
export {};
//# sourceMappingURL=TypeAliases.js.map