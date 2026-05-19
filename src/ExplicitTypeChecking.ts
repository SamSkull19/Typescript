let name : string = 'Sifat Samin'
let age : number = 25;
let price : number = 9.99;
let isActive : boolean = true;
let nothing : null = null;
let notDefined : undefined = undefined;

console.log(name);
console.log(age);
console.log(price);
console.log(isActive);
console.log(nothing);
console.log(notDefined);


let numbers : number[] = [1, 2, 3];
let strings : string[] = ['a', 'v', 'c'];
let bools : boolean[] = [true, false, true];

console.log(numbers);
console.log(strings);
console.log(bools);

let mixValuesArray : (string | number | boolean)[] = ['bag', 34, false, 43, 'cow'];

console.log(mixValuesArray);

let mixValuesArray2 : (string | number | boolean)[] = [];
mixValuesArray2.push('glass', 'potato', 34, false, true);
console.log(mixValuesArray2);


let object1 : object;

object1 = {
    name : 'samin',
    country: 'bangladesh',
    number: 34
}

console.log(object1);

let object2 : {};

object2 = {
    name : 'fahim',
    country: 'america',
    number: 38
}

console.log(object2);


let object3 : {
    name : string,
    country: string,
    number: number
};

object3 = {
    name : 'samin',
    country: 'bangladesh',
    number: 34
}

console.log(object3);


let object4 : {
    dept: string,
    subject: string,
    cg: number,
    isTrue: boolean,
};  

object4 = {
    dept: 'EEE',
    subject: 'EEE 01',
    cg: 3.99,
    isTrue: true,
}

console.log(object4);