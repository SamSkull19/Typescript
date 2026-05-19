const addId = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

let user = addId({
    name: 'Sifat',
    age: 40,
    country: 'Bangladesh'
})

console.log(user.id);
console.log(user.name);
console.log(user.country);


const glass = <T>(obj: T) => {
    let glass = 'Floor';
    return { ...obj, glass };
}

let user2 = glass({ name: 'Samin', age: 20, country: 'Bangladesh' });

console.log(user2);


const newKey = <T>(obj: T) => {
    let sports = 'Cricket';
    return { ...obj, sports };
}

let info = newKey({ fruits: 'Mango', year: 2026, vehicle: 'Cycle' });

console.log(info);


// Two type placeholders T and U
const makePair = <T, U>(first: T, second: U) => {
    return { first, second };
}

let pair1 = makePair('Samin', 22);
let pair2 = makePair(true, [1, 2, 3]);
let pair3 = makePair('Dhaka', 'Bangladesh');

console.log(pair1);
console.log(pair2);
console.log(pair3);


type defObj = {
    name: string,
    age: number,
    country: string,
    permanent: boolean,
}

const modifyData = <T extends defObj>(obj: T) => {
    obj.name += ' Samin';
    obj.age += 10;
    obj.country += ' Sylhet';

    return {...obj};
}

let myInfo : defObj = {
    name: 'Sifat',
    age: 24,
    country: 'Bangladesh',
    permanent: true,
}

console.log(modifyData(myInfo));


const getFirst = <T>(arr: T[]): T | undefined => {
    return arr[0];
}

const getLast = <T>(arr: T[]): T | undefined => {
    return arr[arr.length - 1];
}

console.log(getFirst([1, 2, 3]));
console.log(getFirst(['a', 'b', 'c']));
console.log(getLast([10, 20, 30]));
console.log(getLast(['x', 'y', 'z']));


interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

type User = { name: string; age: number; };
type Product = { title: string; price: number; };

let userResponse: ApiResponse<User> = {
    data: { name: 'Samin', age: 22 },
    status: 200,
    message: 'Success'
};

let productResponse: ApiResponse<Product> = {
    data: { title: 'Laptop', price: 999 },
    status: 200,
    message: 'Success'
};

