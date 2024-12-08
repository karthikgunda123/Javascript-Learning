// Arrow functions

// function expression
const calculateAge = function(birthYear)
{
    return 2037 - birthYear;
}

console.log(calculateAge(2002));

// arrow function
// with single parameter and single line
const calculateAge2 = birthYear => 2037 - birthYear;

const age = calculateAge2(2002);
console.log(age);

// with single parameter and multiple lines
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    return 65 - age;
}

console.log(yearsUntilRetirement(1991));

// multiple parameters and multiple lines
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement2(2002, 'gunda karthik'));
console.log(yearsUntilRetirement2(2004, 'gunda deepak'));


// Juice maker in functions file
const juiceMaker = (apples, oranges) => {
    console.log(apples, oranges);
    return `Juice made with ${apples} apples and ${oranges} oranges`;
}

console.log(juiceMaker(2, 3));