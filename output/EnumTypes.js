var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
console.log(Direction.South);
console.log(Direction.East);
console.log(Direction.West);
let move = Direction.North;
console.log(move);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["North"] = 1] = "North";
    Direction2[Direction2["South"] = 2] = "South";
    Direction2[Direction2["East"] = 3] = "East";
    Direction2[Direction2["West"] = 4] = "West";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.North);
console.log(Direction2.South);
console.log(Direction2.East);
console.log(Direction2.West);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
    Color["Yellow"] = "YELLOW";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color.Green);
let favoriteColor = Color.Blue;
console.log(favoriteColor);
var Direction3;
(function (Direction3) {
    Direction3["North"] = "NORTH";
    Direction3["South"] = "SOUTH";
    Direction3["East"] = "EAST";
    Direction3["West"] = "WEST";
})(Direction3 || (Direction3 = {}));
const move2 = (dir) => {
    console.log(`Moving ${dir}`);
};
move2(Direction3.North);
move2(Direction3.East);
var Season;
(function (Season) {
    Season["Spring"] = "SPRING";
    Season["Summer"] = "SUMMER";
    Season["Autumn"] = "AUTUMN";
    Season["Winter"] = "WINTER";
})(Season || (Season = {}));
const getActivity = (season) => {
    if (season === Season.Summer)
        return 'Go swimming!';
    if (season === Season.Winter)
        return 'Stay indoors!';
    if (season === Season.Spring)
        return 'Go hiking!';
    return 'Collect leaves!';
};
console.log(getActivity(Season.Summer));
console.log(getActivity(Season.Winter));
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: 'Samin',
    age: 22,
    role: Role.Admin,
};
const user2 = {
    name: 'Frank',
    age: 30,
    role: Role.User,
};
const user3 = {
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
var PlayerStatus;
(function (PlayerStatus) {
    PlayerStatus["Active"] = "ACTIVE";
    PlayerStatus["Injured"] = "INJURED";
    PlayerStatus["Retired"] = "RETIRED";
})(PlayerStatus || (PlayerStatus = {}));
class Player {
    constructor(name, country, status) {
        this.name = name;
        this.country = country;
        this.status = status;
    }
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
export {};
//# sourceMappingURL=EnumTypes.js.map