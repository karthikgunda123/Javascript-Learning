// function declarations vs expressions

console.log(calculateAge(2004)); // function declaration can be called anywhere.

// Normal function declaration
function calculateAge(birthYear)
{
    /*
    const age = 2037 - birthYear;
    return age;
     */
    return 2037 - birthYear;
}

const age1 = calculateAge(2002);
console.log(age1);


// console.log(calculateAge2(2004)); function expressions can be called after initialization

// function expression (anonymous)
const calculateAge2 = function (birthYear)
{
    return 2037 - birthYear;
}

const age2 = calculateAge2(2002);
console.log(age2);