// Reviewing Functions

const calculateAge = (birthYear) => 2037 - birthYear;

const calculateRetirement = (age) => 65 - age;

const yearsUntilRetirement = function (birthYear, firstName)
{
    const age = calculateAge(birthYear);
    const retirement = calculateRetirement(age);

    if (retirement > 0)
    {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    }
    else
        return -1;

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Karthik'));