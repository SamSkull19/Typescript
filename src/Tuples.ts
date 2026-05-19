let person: [string, number] = ['Samin', 22];
console.log(person);

let red:   [number, number, number] = [255, 0, 0];
let green: [number, number, number] = [0, 255, 0];
let blue:  [number, number, number] = [0, 0, 255];

console.log(red);
console.log(green);
console.log(blue);


// Coordinates — [latitude, longitude]
let dhaka:  [number, number] = [23.8103, 90.4125];
let london: [number, number] = [51.5074, 0.1278];

console.log(dhaka);
console.log(london);

// Student record — [id, name, cgpa]
let student1: [number, string, number] = [101, 'Samin', 3.85];
let student2: [number, string, number] = [102, 'Frank', 3.60];

console.log(student1);
console.log(student2);


let record: [string, number, boolean?] = ['Samin', 22];
let record2: [string, number, boolean?] = ['Samin', 22, true];

console.log(record);
console.log(record2);


let employee: [number, string, string] = [1, 'Samin', 'Developer'];

let [id, name, role] = employee;
console.log(id);
console.log(name);
console.log(role);