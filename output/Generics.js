const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: 'Sifat',
    age: 40,
    country: 'Bangladesh'
});
console.log(user.id);
console.log(user.name);
console.log(user.country);
const glass = (obj) => {
    let glass = 'Floor';
    return Object.assign(Object.assign({}, obj), { glass });
};
let user2 = glass({ name: 'Samin', age: 20, country: 'Bangladesh' });
console.log(user2);
const newKey = (obj) => {
    let sports = 'Cricket';
    return Object.assign(Object.assign({}, obj), { sports });
};
let info = newKey({ fruits: 'Mango', year: 2026, vehicle: 'Cycle' });
console.log(info);
// Two type placeholders T and U
const makePair = (first, second) => {
    return { first, second };
};
let pair1 = makePair('Samin', 22);
let pair2 = makePair(true, [1, 2, 3]);
let pair3 = makePair('Dhaka', 'Bangladesh');
console.log(pair1);
console.log(pair2);
console.log(pair3);
const modifyData = (obj) => {
    obj.name += ' Samin';
    obj.age += 10;
    obj.country += ' Sylhet';
    return Object.assign({}, obj);
};
let myInfo = {
    name: 'Sifat',
    age: 24,
    country: 'Bangladesh',
    permanent: true,
};
console.log(modifyData(myInfo));
const getFirst = (arr) => {
    return arr[0];
};
const getLast = (arr) => {
    return arr[arr.length - 1];
};
console.log(getFirst([1, 2, 3]));
console.log(getFirst(['a', 'b', 'c']));
console.log(getLast([10, 20, 30]));
console.log(getLast(['x', 'y', 'z']));
let userResponse = {
    data: { name: 'Samin', age: 22 },
    status: 200,
    message: 'Success'
};
let productResponse = {
    data: { title: 'Laptop', price: 999 },
    status: 200,
    message: 'Success'
};
export {};
//# sourceMappingURL=Generics.js.map