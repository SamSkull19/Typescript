let myFunction : Function;

myFunction = (a : number, b : number) => {
    return a * b;
}

console.log(myFunction(10, 5));

const sumFunction = (a : string, b : number, c ?: number) => {
    console.log(`This is ${a}. My CGPA is ${b}. ${c ? 'true' : 'false'}`)
}

sumFunction('Sifat', 2.00);
sumFunction('Sifat Samin', 3.00, 6);


const mySum = (a : number, b : number) : number => {
    return a + b;
}

console.log(mySum(4, 5));

const myString = (a : string, b : string) : string => {
    return a + b;
}

console.log(myString('Sifat ', 'Samin'));


// Function Define

let useMinus: (a : number, b : number) => number;

useMinus = (a : number, b : number) => {
    return a - b;
}

console.log(useMinus(5, 6));


let useDefine : (id : (string | number), user : {name : string, age : number}) => void;

useDefine = (id, user) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
}

useDefine(33, {name: 'Frank', age: 64});


type useId = string | number;
type personalInfos = {
    name: string, 
    age: number,
}

let useDefine2 : (id : useId, user : personalInfos) => void;

useDefine2 = (id, user) => {
    console.log(`User ID : ${id} | Name : ${user.name} | Age : ${user.age}`);
}

useDefine2(13, {name: 'Rain', age: 24});