//Function
//arow function , normal function
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

addNormal(2, 2);
// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(2, 2);

// Object => function => method
// Object ar moddhe ar akti fucntion ke method bole
const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(value: number) {
    this.balance += value;
    const totalBalance = this.balance;
    return totalBalance;
  },
};

poorUser.addBalance(10000);
console.log(poorUser);
//output { name: 'mezba', balance: 10000, addBalance: [Function:
// addBalance] }

const arr: number[] = [1, 4, 6];
const sqrArray = arr.map((el: number): number => el * el);
