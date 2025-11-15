type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Abedin",
  },
  gender: "male",
  contactNo: "01897988675",
  address: {
    division: "Chattagram",
    city: "ChattagramS",
  },
};
const user2: User = {
  id: 123,
  name: {
    firstName: "Mr.",
    lastName: "Alam",
  },
  gender: "male",
  contactNo: "01897988667",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

type Name = string;
const myName: Name = "mr.";
type IsAdmin = true;
const isAdmin: IsAdmin = true;

//  type Alias for Function
type AddFunc = (num1: number, num2: number) => number;
const add: AddFunc = (num1, num2) => num1 + num2;
