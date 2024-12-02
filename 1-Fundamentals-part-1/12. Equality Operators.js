// Equality Operators

const age = '18';

if (age === 18)
    console.log('You just became an adult (strict)');

if (age == 18)
    console.log('You just became an adult (loose)');

console.log('18' == 18);
console.log('19' === 19);

let favouriteNumber = prompt('What is your favourite number?');
console.log(typeof favouriteNumber);
console.log(favouriteNumber);

favouriteNumber = Number(favouriteNumber);

if (favouriteNumber === 23)
    console.log('Cool! 23 is an amazing number');
else if (favouriteNumber === 7)
    console.log('7 is also a cool number');
else if (favouriteNumber === 9)
    console.log('9 is also a cool number');
else
    console.log('Number is not 23 or 7 or 9');

if (favouriteNumber !== 23)
    console.log('Why not 23');