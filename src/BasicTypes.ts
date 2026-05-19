let x = 12;
let y = 10;

console.log(x*y);

// Strict Type Checking 
let name = 'Samin';

console.log(name);

function sum(a : number, b : number) {
    return a + b;
}

console.log(sum(12, 2));

let arr = ['a', 'c', 'd', 'e'];
arr.push('23');
console.log(arr);

let arr2 = [1, 2, 3, 4, 5];
arr2.push(23);
console.log(arr2);

let arr3 = ['apple', 23, true];
arr3.push('false');
arr3.push(false);
arr3.push(56);

console.log(arr3);

let obj = {
    name: 'Samin',
    age: 25,
    city: 'Cumilla'
}

console.log(obj);

obj.age = 26;
obj.name = 'Sifat';
obj.city = 'Sylhet';

console.log(obj);