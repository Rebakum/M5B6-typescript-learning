//Rest Oparator
// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend1}`);
//   console.log(`Sent Invitation to ${friend2}`);
//   console.log(`Sent Invitation to ${friend3}`);
// };
// sendInvite("pintu", "cinthu", "bulbul");
//output
// Sent Invitation to pintu
// Sent Invitation to cinthu
// Sent Invitation to bulbul

//Rest Oparator
//Ekhane object ke array te rupantor kore forEach chalano hoiase
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send invitation to ${friend}`);
  });
};
sendInvite("pintu", "cinthu", "bulbul", "minto");
// Send invitation to pintu
// Send invitation to cinthu
// Send invitation to bulbul
// Send invitation to minto
