//array. object
// ts-tuple
let bazarList: string[] = ["egg", "suger", " milk"]; // ekhane sodho string add kora jabe onno kicho add kora jabe na
bazarList.push("banana");
// console.log(bazarList); // output [ 'egg', 'suger', ' milk', 'banana' ]

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "suger", 2];
mixedArr.push("banana"); //[ 'eggs', 12, 'milk', 1, 'suger', 2, 'banana' ]
mixedArr.push(12); //[ 'eggs', 12, 'milk', 1, 'suger', 2, 'banana', 12 ]
// console.log(mixedArr);

// 2 element bisito tuple

let couple: [string, string] = ["Husband", "wife"];
let MezbaNameAndRoll: [string, number] = ["Mezba", 45];
// 3 element bisisto tuple
let coordinates: [number, number, number] = [20, 30, 50];
let destination: [string, string, number] = ["Dhaka", "chattogram", 3];

// Object Requered full fill korte hobe
// const user: {
//   firstName: string;
//   midleName: string;
//   lastName: string;
// } = {
//   firstName: "Mezbaul",
//   midleName: "Abedin",
//   lastName: "forhan",
// };
// Object Requered full fill korte hobe
const user: {
  organization: "Programming Hero";
  // value=> type litereral types
  firstName: string;
  midleName?: string; // optional
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};
user.organization = "Programming Hero";
console.log(user);

const user1: {
  readonly organization: string;
  // access modifier
  firstName: string;
  midleName?: string; // optional
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};
user.organization = "Programming Hero";
console.log(user1);
