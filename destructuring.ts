//Object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Forhan",
  },
  gender: "male",
  favouritColor: "black",
};
// const myFavoritColor = user.favouritColor
// const myMiddleName = user.name.middleName

// const { favouritColor: myFavouritColor } = user; //name alias
// console.log(myFavouritColor);
const {
  favouritColor: myFavouritColor,
  name: { middleName },
} = user;
// console.log(myFavouritColor, middleName);

// array destructuring

const friends = ["Rahim", "Karim", "Mahin"];
// const myBestFriend = friends[1];
//or
// const [A, myBestFriend, C] = friends; //Karim
const [, , myBestFriend] = friends; // Mahin
console.log(myBestFriend);
