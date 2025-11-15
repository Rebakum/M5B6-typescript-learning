//nullable types
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All User");
  }
};
getUser("Mezba"); // From DB: Mezba

// getUser(null); // From DB: All User

// Unknown type
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountCalculatorPrice = input * 0.1;
    console.log(discountCalculatorPrice); //10
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" "); //[ '100', 'tk' ]
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};
discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);

// void
const throwError = (msg: string): never => {
  throw new Error(msg);
  console.log(Error(msg));
};
throwError("Error...");
