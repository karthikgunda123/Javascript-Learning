///////////////////////////////////////////////////////

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
 */

// Test Data: 1
const markMass = 78;
const markHeight = 1.68;

const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / (markHeight * markHeight);
const BMIJohn = johnMass / (johnHeight * johnHeight);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// Test Data: 2
const markMass2 = 78;
const markHeight2 = 1.68;

const johnMass2 = 92;
const johnHeight2 = 1.95;

const BMIMark2 = markMass2 / (markHeight2 * markHeight2);
const BMIJohn2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log(BMIMark2, BMIJohn2, markHigherBMI2);
