// if-else statements

const age = 15;

if (age >= 18)
{
    console.log('Sarah can start driving license.');
}
else
{
    const yearsLeft = 18 - age;
    console.log(`Sarah can start driver license after ${yearsLeft} years.`)
}

const birthYear = 1991;
let century;

if (birthYear <= 2000)
{
    century = 20;
}
else
{
    century = 21;
}

console.log(century);