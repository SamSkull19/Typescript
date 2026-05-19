enum Direction {
    North,
    South,
    East,
    West
}

console.log(Direction.North);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West);

let move: Direction = Direction.North;

console.log(move);


enum Direction2 {
    North = 1,
    South,
    East,
    West
}

console.log(Direction2.North);
console.log(Direction2.South);
console.log(Direction2.East);
console.log(Direction2.West);


enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE',
    Yellow = 'YELLOW',
}

console.log(Color.Red);
console.log(Color.Green);

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);


enum Direction3 {
    North = 'NORTH',
    South = 'SOUTH',
    East = 'EAST',
    West = 'WEST',
}

const move2 = (dir: Direction3) => {
    console.log(`Moving ${dir}`);
}

move2(Direction3.North);
move2(Direction3.East);


enum Season {
    Spring = 'SPRING',
    Summer = 'SUMMER',
    Autumn = 'AUTUMN',
    Winter = 'WINTER',
}

const getActivity = (season: Season): string => {
    if (season === Season.Summer) return 'Go swimming!';
    if (season === Season.Winter) return 'Stay indoors!';
    if (season === Season.Spring) return 'Go hiking!';
    return 'Collect leaves!';
}

console.log(getActivity(Season.Summer));
console.log(getActivity(Season.Winter));


enum Role {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST',
}

interface UserProfile {
    name: string,
    age: number,
    role: Role,
}

const user1: UserProfile = {
    name: 'Samin',
    age: 22,
    role: Role.Admin,
};

const user2: UserProfile = {
    name: 'Frank',
    age: 30,
    role: Role.User,
};

const user3: UserProfile = {
    name: 'Rain',
    age: 25,
    role: Role.Guest,
};

console.log(user1.role);
console.log(user2.role);
console.log(user3.role);


if (user1.role === Role.Admin) {
    console.log(`${user1.name} has full access!`);
}


enum PlayerStatus {
    Active = 'ACTIVE',
    Injured = 'INJURED',
    Retired = 'RETIRED',
}

class Player {
    constructor(
        public name: string,
        public country: string,
        public status: PlayerStatus,
    ) { }

    describe() {
        console.log(`${this.name} from ${this.country} — Status: ${this.status}`);
    }
}

const shakib = new Player('Shakib', 'Bangladesh', PlayerStatus.Active);
const lara = new Player('Lara', 'West Indies', PlayerStatus.Retired);
const stokes = new Player('Stokes', 'England', PlayerStatus.Injured);

shakib.describe();
lara.describe();
stokes.describe();