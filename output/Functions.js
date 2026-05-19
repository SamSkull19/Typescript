let myFunction;
myFunction = (a, b) => {
    return a * b;
};
console.log(myFunction(10, 5));
const sumFunction = (a, b, c) => {
    console.log(`This is ${a}. My CGPA is ${b}. ${c ? 'true' : 'false'}`);
};
sumFunction('Sifat', 2.00);
sumFunction('Sifat Samin', 3.00, 6);
const mySum = (a, b) => {
    return a + b;
};
console.log(mySum(4, 5));
const myString = (a, b) => {
    return a + b;
};
console.log(myString('Sifat ', 'Samin'));
// Function Define
let useMinus;
useMinus = (a, b) => {
    return a - b;
};
console.log(useMinus(5, 6));
let useDefine;
useDefine = (id, user) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
};
useDefine(33, { name: 'Frank', age: 64 });
let useDefine2;
useDefine2 = (id, user) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
};
useDefine2(13, { name: 'Rain', age: 24 });
export {};
//# sourceMappingURL=Functions.js.map