// ? : ternary oparator : decision makaring
// ?? : nullish coolescing oparator null and undefined thakle o kaj kore
// ?. optional chaining

const userAge = 21;
const biyerJonnoEligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("You are eligible");
  // } else {
  //   console.log("You are not Eligible");
  // }

  //or
  const result = age >= 21 ? "You are eligible" : "You are not eligible";
  // console.log(result);
};
biyerJonnoEligible(20);

// nullish coolescing oparator
// null and undefined value ar opor  a kaj kore
const userTheme = null;
const selectedTheme = userTheme ?? "Light theme";
console.log(selectedTheme);

//example
const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";
const resultWithNulish = isAuthenticated ?? "you are guest !";
console.log({ resultWithTernary }, { resultWithNulish });
// { resultWithTernary: 'You are guest' } { resultWithNulish: '' }

// optional chaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string; // optional ?
  };
} = {
  address: {
    city: " Dhaka",
    town: " Dhaka",
  },
};
const postalCode = user?.address?.postalCode;
console.log("postalCode:", postalCode);
