// array spread oparator
const friends = ["Rahim", "karim"];
const schoolFriend = ["pinto", "chintu", "minto"];
const collegeFriend = ["mr.Ali", "mr. hemel"];
friends.push(...schoolFriend); // spread oparatoe
// [ 'Rahim', 'karik', 'pinto', 'chintu', 'minto' ]
friends.push(...collegeFriend);
//[ 'Rahim', 'karim', 'pinto', 'chintu', 'minto', 'mr.Ali', 'mr. hemel' ]

console.log(friends);

// Object Spread Oparator
const user = { name: "Mezba", phoneNo: "01910005435" };
const otherInfo = { Hobby: "outing", favouriteColor: " Black" };
const userInfo = { ...user, ...otherInfo }; // spread oparator
console.log(userInfo);
