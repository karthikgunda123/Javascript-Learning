////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// Test Data: 1
const bill = 275;

const tipPercentage = (bill >= 50 && bill <= 300) ? 15 : 20;

const tip = (bill * tipPercentage) / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

// Test Data: 2
const bill2 = 40;

const tipPercentage2 = (bill2 >= 50 && bill2 <= 300) ? 15 : 20;

const tip2 = (bill2 * tipPercentage2) / 100;

console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value is ${bill2 + tip2}`);

// Test Data: 3
const bill3 = 430;

const tipPercentage3 = (bill3 >= 50 && bill3 <= 300) ? 15 : 20;

const tip3 = (bill3 * tipPercentage3) / 100;

console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value is ${bill3 + tip3}`);
